import { pgTable, uuid, text, varchar, timestamp } from 'drizzle-orm/pg-core';
import { Roles } from '../roles/roles.entity';

export const Users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  password: text('password').notNull(),
  roleId: uuid('role_id').references(() => Roles.id, { onDelete: 'cascade' }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
