import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema, createUpdateSchema } from 'drizzle-zod';

import { z } from "zod";

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

export const userSchema = z.object({
  email: z.string().min(1, 'Username is required').email('Invalid email address'),
  password: z.string().min(1, 'Password is required').min(8, 'Password must be at least 8 characters long')
})
