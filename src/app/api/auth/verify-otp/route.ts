
import { db } from "@/lib/drizzle";
import { otps, users } from "@/lib/schema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { auth } from "@/auth";
import { eq } from "drizzle-orm";



export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session) throw new Error("Login first to verify email")
    if (session.user.emailVerified) {
      return NextResponse.json({ message: "Email is already verified!" }, { status: 200 });
    }

    const { otp } = await req.json()
    if (!otp) throw new Error("OTP is required")

    const userWithEmail = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, session.user.email!),
    });

    if (!userWithEmail) throw new Error("User with email not exists.");


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

    // If OTP is valid, mark email as verified (you can implement this as per your requirement)
    // await db.update(users).set({ emailVerified: new Date() }).where((users, { eq }) => eq(users.id, userWithEmail.id));
    await db.update(users).set({ emailVerified: new Date() })
      .where(eq(users.id, userWithEmail.id));


    await db.delete(otps).where(eq(otps.userId, userWithEmail.id));

    return NextResponse.json({ message: "Email verified successfully!" }, { status: 200 });

  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 500 });
    }
    console.log("[OTP_ERROR]: ", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}