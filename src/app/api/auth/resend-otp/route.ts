import {db} from "@/lib/drizzle";
import {otps} from "@/lib/schema";
import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";

import otpEmailTemplate from "@/lib/templates/otp-template";
import {auth} from "@/auth";
import mailer from "@/lib/mailer";

// `onboarding@uk-culture.org` email is for development only
const senderEmail = process.env.SENDER_EMAIL || "onboarding@uk-culture.org";

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session) throw new Error("Login first to verify email");

        const userWithEmail = await db.query.users.findFirst({
            where: (users, {eq}) => eq(users.email, session.user.email!),
        });

        if (!userWithEmail) throw new Error("User with email not exists.");

        const prevOtps = await db.query.otps.findMany({
            where: (otps, {eq}) => eq(otps.userId, userWithEmail.id),
            orderBy: (otps, {desc}) => desc(otps.expiresAt),
        });

        // Check if there is a valid OTP
        const now = new Date();
        const validOtp = prevOtps.find((otp) => otp.expiresAt > now);

        if (validOtp) {
            const remainingTimeInSeconds = Math.floor(
                (validOtp.expiresAt.getTime() - now.getTime()) / 1000
            ); // Time in seconds
            const minutes = Math.floor(remainingTimeInSeconds / 60); // Full minutes
            const seconds = remainingTimeInSeconds % 60; // Remaining seconds

            return NextResponse.json(
                {
                    message: `Please wait ${minutes} minutes and ${seconds} seconds before resending the OTP.`,
                },
                {status: 429}
            );
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
        // Set expiration time (e.g., 10 minutes from now)
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes in the future

        await db.insert(otps).values({
            expiresAt,
            otp,
            userId: userWithEmail.id,
            createdAt: new Date(),
        });

        await mailer.sendMail({
            from: `Uttarakhand Culture <${senderEmail}>`,
            to: [userWithEmail.email!],
            subject: "Verify you email with OTP",
            html: otpEmailTemplate(userWithEmail.name!, otp),
        });

        return NextResponse.json({
            message: `OTP has been resent to your email.`,
        });
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({error: error.errors}, {status: 500});
        }
        console.log("[OTP_RESEND_ERROR]: ", error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
