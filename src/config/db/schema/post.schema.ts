import { InferModel, relations } from 'drizzle-orm';
import { mysqlTable, int, text, timestamp } from 'drizzle-orm/mysql-core';

// import schemas
import { userSchema } from './user.schema.js';

export const postSchema = mysqlTable(
    'post',

    {
        id: int('id').autoincrement().primaryKey(),
        caption: text('caption').notNull(),
        authorId: int('author_id').references(() => userSchema.id).notNull(),

        createdAt: timestamp('created_at').defaultNow().notNull(),
        updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
    }
);


// relations
export const postsRelations = relations(postSchema, ({ one }) => ({
    author: one(userSchema, { fields: [postSchema.authorId], references: [userSchema.id]}),
}));


// types
type PostType = InferModel<typeof postSchema>;