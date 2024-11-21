
import { db } from "@/lib/drizzle";
import { otps, users } from "@/lib/schema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { eq } from "drizzle-orm";

// In-memory store for rate limiting
const rateLimit = new Map < string, { requests: number; lastRequestTime: number } >();

// Rate limiting configuration
const MAX_REQUESTS = 3; // Max requests per window
const WINDOW_MS = 5 * 60 * 1000; // 5 minutes in milliseconds

function checkRateLimit(userId: string): boolean {
  const currentTime = Date.now();
  const userData = rateLimit.get(userId);

  if (userData) {
    // Reset if the window has passed
    if (currentTime - userData.lastRequestTime > WINDOW_MS) {
      rateLimit.set(userId, { requests: 1, lastRequestTime: currentTime });
      return false;
    }
    // Increment request count if within window
    if (userData.requests < MAX_REQUESTS) {
      rateLimit.set(userId, {
        requests: userData.requests + 1,
        lastRequestTime: currentTime,
      });
      return false;
    }
    // Rate limit exceeded
    return true;
  } else {
    // Initialize user rate limit
    rateLimit.set(userId, { requests: 1, lastRequestTime: currentTime });
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session) throw new Error("Login first to verify email");

    const userId = session.user.id;

    // Check rate limit
    if (checkRateLimit(userId)) {
      return NextResponse.json(
        { error: "limit exceeded. Please try again after 5 minutes." },
        { status: 429 }
      );
    }

    if (session.user.emailVerified) {
      return NextResponse.json(
        { message: "Email is already verified!" },
        { status: 200 }
      );
    }

    const { otp } = await req.json();
    if (!otp) throw new Error("OTP is required");

    const userWithEmail = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, session.user.email!),
    });

    if (!userWithEmail) throw new Error("User with email does not exist.");

    const latestOtp = await db.query.otps.findFirst({
      where: (otps, { eq }) => eq(otps.userId, userWithEmail.id),
      orderBy: (otps, { desc }) => desc(otps.expiresAt),
    });

    if (!latestOtp) throw new Error("No OTP found for this user.");

    // Check if the OTP is valid (not expired)
    const now = new Date();
    if (latestOtp.expiresAt < now) {
      throw new Error("OTP has expired.");
    }

    // Check if the provided OTP matches
    if (latestOtp.otp !== otp) {
      throw new Error("Invalid OTP.");
    }

    // Mark email as verified
    await db
      .update(users)
      .set({ emailVerified: new Date() })
      .where(eq(users.id, userWithEmail.id));

    await db.delete(otps).where(eq(otps.userId, userWithEmail.id));

    return NextResponse.json(
      { message: "Email verified successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 500 });
    }
    console.log("[OTP_ERROR]: ", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
