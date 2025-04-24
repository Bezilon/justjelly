import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const servers = pgTable('servers', {
  id: serial('id').primaryKey(),
  title: text('name').notNull(),
  content: text('api_key').notNull(),
  // userId: integer('user_id')
  //   .notNull()
  //   .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertServer = typeof servers.$inferInsert;
export type SelectServer = typeof servers.$inferSelect;
