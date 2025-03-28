import { pgTable, uuid, timestamp } from 'drizzle-orm/pg-core';
import { Roles } from '../roles/roles.entity';
import { Permissions } from '../permissions/permissions.entity';

export const RolesPermissions = pgTable('roles_permissions', {
  id: uuid('id').defaultRandom().primaryKey(),
  roleId: uuid('role_id').references(() => Roles.id, { onDelete: 'cascade' }).notNull(),
  permissionId: uuid('permission_id').references(() => Permissions.id, { onDelete: 'cascade' }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
