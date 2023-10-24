import { InferModel, relations } from 'drizzle-orm';
import { mysqlEnum, mysqlTable, int, varchar, timestamp } from 'drizzle-orm/mysql-core';

// import schemas
import { postSchema } from './post.schema.js';

export const userSchema = mysqlTable(
    'user',

    {
        id: int('id').autoincrement().primaryKey(),
        name: varchar('name', { length: 50 }).notNull(),
        email: varchar('email', { length: 255 }).notNull().unique(),
        password: varchar('password', { length: 255 }).notNull(),
        role: mysqlEnum('role', ['admin', 'user']).notNull().default('user'),

        createdAt: timestamp('created_at').defaultNow().notNull(),
        updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
    }
);


// relations
export const usersRelations = relations(userSchema, ({ many }) => ({
    posts: many(postSchema),
}));


// types
type UserType = InferModel<typeof userSchema>;