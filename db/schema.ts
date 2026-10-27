import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const entries = sqliteTable('entries', { id: text('id').primaryKey(), owner: text('owner').notNull(), kind: text('kind').notNull(), data: text('data').notNull(), created: text('created').notNull() });
