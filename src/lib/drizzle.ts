import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/lib/schema";
import { neon } from "@neondatabase/serverless";

// Ensure DATABASE_URL is defined
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
	throw new Error("DATABASE_URL is not defined");
}

let pool;
try {
	pool = neon(connectionString);
} catch (error) {
	console.error("Error creating Neon pool:", error);
	throw error; // Rethrow or handle appropriately
}

export const db = drizzle(pool, { schema });
