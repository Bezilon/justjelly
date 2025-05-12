// import { sql } from 'drizzle-orm';
// import { db } from "@/drizzle/db";
// import { users } from "@/drizzle/schema";

export async function seedAdminUser() {
  // await db.insert(users).values({
  //   username: process.env.JUSTJELLY_USER!,
  //   password: sql`crypt(${process.env.JUSTNELLY_PASSWORD!}, gen_salt('xdes'))`
  // }).onConflictDoNothing();
}
