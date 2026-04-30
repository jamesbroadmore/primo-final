import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

const databaseUrl = process.env.DATABASE_URL || '';

let pool: Pool | null = null;
let db: ReturnType<typeof drizzle> | null = null;

if (!databaseUrl) {
  if (process.env.NODE_ENV === 'development') {
    console.warn('⚠️  DATABASE_URL not set. Running without database for development.');
  } else {
    throw new Error(
      "DATABASE_URL must be set. Did you forget to provision a database?",
    );
  }
} else {
  pool = new Pool({ connectionString: databaseUrl });
  db = drizzle({ client: pool, schema });
}

export { pool, db };
