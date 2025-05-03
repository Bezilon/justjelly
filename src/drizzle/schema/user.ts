import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema, createUpdateSchema } from 'drizzle-zod';

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
  createdAt: timestamp("createdAt", { mode: "date" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updatedAt", { mode: "date" })
});

export const userSelectSchema = createSelectSchema(users);
export const userInsertSchema = createInsertSchema(users);
export const userUpdateSchema = createUpdateSchema(users);
