CREATE TABLE IF NOT EXISTS "pending_users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"alerts" boolean,
	"otp" text NOT NULL,
	"expiresAt" timestamp NOT NULL,
	"createdAt" timestamp NOT NULL,
	CONSTRAINT "pending_users_email_unique" UNIQUE("email"),
	CONSTRAINT "pending_users_username_unique" UNIQUE("username")
);
