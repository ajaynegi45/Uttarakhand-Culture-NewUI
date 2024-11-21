import {drizzle} from 'drizzle-orm/neon-http';
import * as schema from '@/lib/schema';
import {neon} from '@neondatabase/serverless';

// Load the connection string from environment variables
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set.");
}

// Set up Neon pool using the connection string
const pool = neon(connectionString);

// Export the configured database instance
export const db = drizzle(pool, {schema});
