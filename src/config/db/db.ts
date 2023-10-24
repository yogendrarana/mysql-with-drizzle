import path from 'path';
import mysql from 'mysql2'
import { drizzle } from 'drizzle-orm/mysql2'
import { migrate } from 'drizzle-orm/mysql2/migrator';


const pool = mysql.createPool({
    user: 'root',
    password: 'password',
    host: 'localhost',
    database: 'howtomysql',
    port: 3306
}).promise();


// for drizzle
export const db = drizzle(pool);


// this will automatically run needed migrations on the database
await migrate(db, { migrationsFolder: path.resolve("drizzle")});