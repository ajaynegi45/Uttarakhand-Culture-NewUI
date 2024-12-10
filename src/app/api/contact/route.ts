import { NextResponse } from 'next/server';
import mailer from '@/lib/mailer';

const senderEmail = process.env.SENDER_EMAIL;
const receiverEmail = process.env.CONTACT_FORM_RECEIVER_EMAIL
export async function POST(request: Request) {
    try {
        const { name, email, reason, message } = await request.json();

        if (!name || !email || !reason || !message) {
            return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
        }

        // Send the email using Nodemailer
        await mailer.sendMail({
            from: `Contact Form <${senderEmail}>`,
            to: receiverEmail,
            subject: `Contact Form: ${reason}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #0070f3;">You Have a New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Reason:</strong> ${reason}</p>
                    <p><strong>Message:</strong></p>
                    <blockquote style="background: #f9f9f9; padding: 15px; border-left: 5px solid #0070f3; margin: 10px 0;">
                        ${message}
                    </blockquote>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <p style="font-size: 12px; color: #888;">This is an automated email. Please do not reply to this email.</p>
                </div>
            `,
        });
        console.log(process.env.SENDER_EMAIL);
        console.log(process.env.CONTACT_FORM_RECEIVER_EMAIL);

        return NextResponse.json({ message: 'Email sent successfully.' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }
}

// Handle other HTTP methods
export async function GET() {
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
