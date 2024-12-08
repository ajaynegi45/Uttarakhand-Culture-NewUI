import {z} from "zod";  // Zod is a validation library for handling structured data validation
import {hash} from "bcryptjs";  // bcryptjs is used for securely hashing passwords
import {db} from "@/lib/drizzle";  // This imports the database handler from Drizzle ORM
import mailer from "@/lib/mailer";  // This imports the mailer function for sending emails
import {signupSchema} from "@/lib/zod";  // A Zod schema for validating incoming signup data
import {otps, users} from "@/lib/schema";  // Imports the OTP and users tables from the database schema
import {NextRequest, NextResponse} from "next/server";  // These are Next.js server functions for handling HTTP requests and responses
import otpEmailTemplate from "@/lib/templates/otp-template";  // A template for the OTP email

// Define the sender email address for OTP verification emails.
// This is used in the development environment as a fallback if the environment variable is not set.
const senderEmail = process.env.SENDER_EMAIL || "onboarding@uk-culture.org";

// POST request handler for user registration
export async function POST(req: NextRequest) {
    try {
        // Parse the incoming request JSON to extract the user data
        const payload = await req.json();

        // Validate the request data using the predefined Zod schema
        // This checks that the data conforms to the expected types and structure
        const {email, name, password, username, alerts} = signupSchema.parse(payload)

        // Basic validation to ensure required fields are provided
        if (!email || !name || !password || !username) {
            return NextResponse.json(
                {error: "name, username, email and password are required."},
                {status: 400}
            );
        }

        // Check if a user with the same username already exists in the database
        const userWithUsername = await db.query.users.findFirst({
            where: (users, {eq}) => eq(users.username, username),
        });

        // If the username already exists, return an error
        if (userWithUsername) throw new Error("User with username already exists.");

        // Check if a user with the same email already exists
        const userWithEmail = await db.query.users.findFirst({
            where: (users, {eq}) => eq(users.email, email),
        });

        // If the email already exists, return an error
        if (userWithEmail) throw new Error("User with email already exists.");

        // If no duplicates, hash the password for secure storage
        const hashedPassword = await hash(password, 10);

        // Insert the new user data into the 'users' table in the database
        await db.insert(users).values({
            username,
            email,
            name,
            password: hashedPassword,
            alerts  // 'alerts' is a user setting, likely indicating whether the user wants notifications
        });

        // Generate a 6-digit OTP (One Time Password) for email verification
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // Set an expiration time for the OTP (10 minutes from now)
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes in the future

        // Fetch the user from the database by email to associate the OTP with the correct user
        const user = await db.query.users.findFirst({
            where: (users, {eq}) => eq(users.email, email),
        });

        // Insert the OTP and its expiration time into the 'otps' table
        await db.insert(otps).values({
            expiresAt,
            otp,
            userId: user!.id,  // Use the user's ID from the fetched record
            createdAt: new Date(),  // Set the current time as the creation time of the OTP
        });

        // Send an email to the user with the OTP for email verification
        await mailer.sendMail({
            from: `Uttarakhand Culture <${senderEmail}>`,  // From address (e.g., a sender email)
            to: [email],  // Recipient email
            subject: 'Verify you email with OTP',  // Email subject
            html: otpEmailTemplate(name, otp),  // The email body generated using the OTP template
        });

        // Return a success response indicating the user has been registered
        return NextResponse.json({
            message: `Registered. Now login!`,
        });

    } catch (error: any) {
        // Handle errors that occur during the registration process

        // If the error is a Zod validation error, return the validation error details
        if (error instanceof z.ZodError) {
            return NextResponse.json({error: error.errors}, {status: 500});
        }

        // Log unexpected errors to the console for debugging purposes
        console.log("[REGISTER_ERROR]: ", error);

        // Return a generic error message
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
