import { drizzle } from 'drizzle-orm/node-postgres';
import { config } from 'dotenv';
import * as schema from "@/db/schema";
import { Pool } from 'pg'

config({ path: '.env' });

export const client = new Pool({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT as string),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

export const db = drizzle(client, { schema });