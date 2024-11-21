import Credentials from "next-auth/providers/credentials";
import type {NextAuthConfig} from "next-auth";

import {ZodError} from "zod";
import {compare} from "bcryptjs";
import {loginSchema} from "./lib/zod";
import {db} from "./lib/drizzle";

export default {
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                loginIdentifier: {type: "text"},
                password: {label: "password", type: "password"},
            },
            authorize: async (credentials) => {
                try {
                    const {loginIdentifier, password} = await loginSchema.parseAsync(
                        credentials
                    );

                    // logic to verify if the user exists
                    const user = await db.query.users.findFirst({
                        where: (users, {
                            eq,
                            or
                        }) => or(eq(users.email, loginIdentifier), eq(users.username, loginIdentifier)),
                    })


                    if (!user) {
                        console.log("User not found:", loginIdentifier)
                        throw new Error("User not found!");
                    }

                    const passwordsMatch = await compare(password, user.password!);
                    if (passwordsMatch) return user;

                    else {
                        throw new Error("Password is wrong!");
                    }
                } catch (error) {
                    if (error instanceof ZodError) {
                        return null;
                    }
                    return null;
                }
            },
        }),
    ],
} satisfies NextAuthConfig;