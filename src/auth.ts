import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./lib/drizzle";
import { accounts, sessions, users, verificationTokens } from "./lib/schema";
import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
	adapter: DrizzleAdapter(db, {
		usersTable: users,
		accountsTable: accounts,
		sessionsTable: sessions,
		verificationTokensTable: verificationTokens,
	}),
	secret: process.env.SECRET, // Include your secret here
	callbacks: {
		async jwt({ token }) {
			// ...
		},
		session({ session, token }) {
			// ...
		},
	},
	debug: process.env.NODE_ENV === "development",
	session: { strategy: "jwt" },
	// Ensure authConfig is properly defined and doesn't override the secret
	...authConfig,
});
