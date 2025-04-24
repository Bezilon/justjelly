import { sql } from 'drizzle-orm';
import { db } from "@/db";
import { users } from "@/db/schema";

async function seed() {
  await db.insert(users).values({
    username: process.env.JUSTJELLY_USER!,
    password: sql`crypt(${process.env.JUSTNELLY_PASSWORD!}, gen_salt('xdes'))`
  });
}

seed();