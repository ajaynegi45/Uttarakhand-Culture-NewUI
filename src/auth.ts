import NextAuth from "next-auth"
import {DrizzleAdapter} from "@auth/drizzle-adapter"
import {db} from "./lib/drizzle"
import {accounts, sessions, users, verificationTokens} from "./lib/schema"
import authConfig from "./auth.config"


export const {handlers, auth, signIn, signOut} = NextAuth({
    adapter: DrizzleAdapter(db, {
        usersTable: users,
        accountsTable: accounts,
        sessionsTable: sessions,
        verificationTokensTable: verificationTokens,
    }),
    callbacks: {
        async jwt({token}) {
            if (!token.sub) return token;
            const user = await db.query.users.findFirst({
                where: (users, {eq}) => eq(users.id, token.sub!)
            })

            if (!user) return token;
            // User is available during sign-in
            token.id = user.id;
            token.emailVerified = user.emailVerified;

            return token;
        },
        session({session, token}) {
            session.user.id = token.id as string;
            session.user.emailVerified = token.emailVerified as Date;

            return session;
        },


    }
    ,

    debug: process.env.NODE_ENV === "development",
    session: {strategy: "jwt"},
    ...authConfig,
})