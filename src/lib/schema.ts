import {boolean, integer, pgTable, primaryKey, text, timestamp,} from "drizzle-orm/pg-core"
import type {AdapterAccountType} from "next-auth/adapters"


export const users = pgTable("user", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").unique(),
    username: text("username").unique(),
    password: text("password"),
    alerts: boolean("alerts"),
    emailVerified: timestamp("emailVerified", {mode: "date"}),
    image: text("image"),
})

export const accounts = pgTable(
    "account",
    {
        userId: text("userId")
            .notNull()
            .references(() => users.id, {onDelete: "cascade"}),
        type: text("type").$type<AdapterAccountType>().notNull(),
        provider: text("provider").notNull(),
        providerAccountId: text("providerAccountId").notNull(),
        refresh_token: text("refresh_token"),
        access_token: text("access_token"),
        expires_at: integer("expires_at"),
        token_type: text("token_type"),
        scope: text("scope"),
        id_token: text("id_token"),
        session_state: text("session_state"),
    },
    (account) => ({
        compoundKey: primaryKey({
            columns: [account.provider, account.providerAccountId],
        }),
    })
)

export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: text("userId")
        .notNull()
        .references(() => users.id, {onDelete: "cascade"}),
    expires: timestamp("expires", {mode: "date"}).notNull(),
})

export const verificationTokens = pgTable(
    "verificationToken",
    {
        identifier: text("identifier").notNull(),
        token: text("token").notNull(),
        expires: timestamp("expires", {mode: "date"}).notNull(),
    },
    (verificationToken) => ({
        compositePk: primaryKey({
            columns: [verificationToken.identifier, verificationToken.token],
        }),
    })
)


export const otps = pgTable("otp", {
    userId: text("userId")
        .notNull()
        .references(() => users.id, {onDelete: "cascade"}),
    otp: text("otp").notNull(),
    createdAt: timestamp("createdAt", {mode: "date"}).notNull(),
    expiresAt: timestamp("expiresAt", {mode: "date"}).notNull(),
    isUsed: boolean("isUsed").notNull().default(false),
}, (otp) => ({
    primaryKey: primaryKey({columns: [otp.userId, otp.createdAt]}),
}));