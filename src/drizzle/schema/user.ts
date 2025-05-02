import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable("user", {
  id: uuid("id")
    .primaryKey()
    .unique()
    .defaultRandom(),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  password: text("password"),
  image: text("image"),
});

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
