import {db} from "@/lib/drizzle";
import {pending_users, users} from "@/lib/schema";
import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";
import {auth} from "@/auth";
import {eq} from "drizzle-orm";

// In-memory store for rate limiting
const rateLimit = new Map<string, { requests: number; lastRequestTime: number }>();

// Rate limiting configuration
const MAX_REQUESTS = 3; // Max requests per window
const WINDOW_MS = 5 * 60 * 1000; // 5 minutes in milliseconds

function checkRateLimit(userId: string): boolean {
    const currentTime = Date.now();
    const userData = rateLimit.get(userId);

    if (userData) {
        // Reset if the window has passed
        if (currentTime - userData.lastRequestTime > WINDOW_MS) {
            rateLimit.set(userId, {requests: 1, lastRequestTime: currentTime});
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
        rateLimit.set(userId, {requests: 1, lastRequestTime: currentTime});
        return false;
    }
}

export async function POST(req: NextRequest) {
    try {
        // const session = await auth();
        // if (!session) throw new Error("Login first to verify email");

        // const userId = session.user.id;

        const {email, otp} = await req.json();

        if (!email || !otp) throw new Error("Email and OTP are required");

        // Check rate limit
        if (checkRateLimit(email)) {
            return NextResponse.json(
                {error: "limit exceeded. Please try again after 5 minutes."},
                {status: 429}
            );
        }

      const pending = await db.query.pending_users.findFirst({
            where: (pending_users, { eq }) => eq(pending_users.email, email),
        });

        if (!pending) throw new Error("No pending signup found for this email.");

        // Check OTP match
        if (pending.otp !== otp) throw new Error("Invalid OTP.");

        // Check OTP expiry
        const now = new Date();
        if (pending.expiresAt < now) throw new Error("OTP has expired.");

        // Create actual user in `users`
        await db.insert(users).values({
            email: pending.email,
            name: pending.name,
            username: pending.username,
            password: pending.password,
            alerts: pending.alerts,
            emailVerified: new Date(),
        });

        // Delete pending user entry
        await db.delete(pending_users).where(eq(pending_users.email, email));

        return NextResponse.json(
            { message: "Email verified and account created successfully!" },
            { status: 200 }
        );
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.errors }, { status: 400 });
        }
        console.log("[OTP_VERIFY_ERROR]: ", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
