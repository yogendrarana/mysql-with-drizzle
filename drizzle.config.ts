import type { Config } from 'drizzle-kit';

export default {
    schema: "./dist/config/db/schema",
    out: "./drizzle/migrations",
    driver: "mysql2",
    dbCredentials: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "howtomysql",
    }
} satisfies Config;