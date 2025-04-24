import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
  schema: './src/db/schema/',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: `postgres://${process.env.POSTGRES_USER!}:${process.env.POSTGRES_PASSWORD!}@${process.env.POSTGRES_HOST!}:${process.env.POSTGRES_PORT!}/${process.env.POSTGRES_DB!}`
  },
  verbose: true,
  strict: true
});