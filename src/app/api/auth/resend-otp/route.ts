import {db} from "@/lib/drizzle";
import {pending_users} from "@/lib/schema";
import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";
import otpEmailTemplate from "@/lib/templates/otp-template";
import mailer from "@/lib/mailer";
import {eq} from "drizzle-orm";

const senderEmail = process.env.SENDER_EMAIL || "onboarding@uk-culture.org";

// In-memory store for rate limiting
const rateLimit = new Map<string, { requests: number; lastRequestTime: number }>();

const MAX_REQUESTS = 3;
const WINDOW_MS = 5 * 60 * 1000; // 5 minutes

function checkRateLimit(email: string): boolean {
    const currentTime = Date.now();
    const userData = rateLimit.get(email);

    if (userData) {
        if (currentTime - userData.lastRequestTime > WINDOW_MS) {
            rateLimit.set(email, {requests: 1, lastRequestTime: currentTime});
            return false;
        }
        if (userData.requests < MAX_REQUESTS) {
            rateLimit.set(email, {
                requests: userData.requests + 1,
                lastRequestTime: currentTime,
            });
            return false;
        }
        return true;
    } else {
        rateLimit.set(email, {requests: 1, lastRequestTime: currentTime});
        return false;
    }
}

export async function POST(req: NextRequest) {
    try {
        const {email} = await req.json();

        if (!email) throw new Error("Email is required");

        // Check rate limit
        if (checkRateLimit(email)) {
            return NextResponse.json(
                {error: "Rate limit exceeded. Please try again after 5 minutes."},
                {status: 429}
            );
        }

        // Find pending user
        const pendingUser = await db.query.pending_users.findFirst({
            where: (pending_users, {eq}) => eq(pending_users.email, email),
        });

        if (!pendingUser) {
            throw new Error("No pending signup found. Please sign up first.");
        }

        // Check if last OTP is still valid (prevent spam)
        const now = new Date();
        const timeSinceLastOtp = now.getTime() - pendingUser.createdAt.getTime();
        const minTimeBetweenOtps = 60 * 1000; // 1 minute

        if (timeSinceLastOtp < minTimeBetweenOtps && pendingUser.expiresAt > now) {
            const remainingSeconds = Math.ceil((minTimeBetweenOtps - timeSinceLastOtp) / 1000);
            return NextResponse.json(
                {
                    error: `Please wait ${remainingSeconds} seconds before requesting a new OTP.`,
                },
                {status: 429}
            );
        }

        // Generate new OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        // Update pending user with new OTP
        await db
            .update(pending_users)
            .set({
                otp,
                expiresAt,
                createdAt: new Date(), // Update timestamp
            })
            .where(eq(pending_users.email, email));

        // Send email
        await mailer.sendMail({
            from: `Uttarakhand Culture <${senderEmail}>`,
            to: [email],
            subject: "Verify your email with OTP",
            html: otpEmailTemplate(pendingUser.name, otp),
        });

        return NextResponse.json({
            message: "OTP has been resent to your email.",
        });
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({error: error.errors}, {status: 500});
        }
        console.log("[OTP_RESEND_ERROR]: ", error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}