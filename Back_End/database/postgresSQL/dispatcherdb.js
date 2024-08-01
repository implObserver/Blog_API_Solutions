import 'dotenv/config'
import pkg from 'pg';

const { Pool } = pkg;

// In Separate file
//const pstgresDB = process.env.POSTGRESDB_BLOG_URI;
//BUILD A CONNECTION
export const pool = new Pool({
    connectionString: process.env.POSTGRESDB_BLOG_URI2
});

