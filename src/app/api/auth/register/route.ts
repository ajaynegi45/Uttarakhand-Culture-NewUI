
import { db } from "@/lib/drizzle";
import { otps, users } from "@/lib/schema";
import { signupSchema } from "@/lib/zod";
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { Resend } from 'resend';
import otpEmailTemplate from "@/lib/templates/otp-template";



const resendAPI = process.env.RESEND_API_KEY;

// `onboarding@resend.dev` email is for development only
const resendEmail = process.env.RESENDL_EMAIL || "onboarding@resend.dev";

const resend = new Resend(resendAPI);


export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    const { email, name, password, username, alerts } = signupSchema.parse(payload)
    if (!email || !name || !password || !username) {
      return NextResponse.json(
        { error: "name, username, email and password are required." },
        { status: 400 }
      );
    }

    const userWithUsername = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.username, username),
    });
    if (userWithUsername) throw new Error("User with username already exists.");

    const userWithEmail = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    });

    if (userWithEmail) throw new Error("User with email already exists.");

    const hashedPassword = await hash(password, 10);

    await db.insert(users).values({
      email,
      name,
      password: hashedPassword,
      alerts,
      username
    });


    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    // Set expiration time (e.g., 10 minutes from now)
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes in the future

    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    })

    await db.insert(otps).values({
      expiresAt,
      otp,
      userId: user!.id,
      createdAt: new Date(),
    });



    const res = await resend.emails.send({
      from: `Uttarakhand Culture <${resendEmail}>`,
      to: [email],
      subject: 'Verify you email with OTP',
      html: otpEmailTemplate(name, otp),
    });

    if (res.error) {
      console.log(res.error)
    }



    return NextResponse.json({
      message: `Registered. Now login!`,
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 500 });
    }
    console.log("[REGISTER_ERROR]: ", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}