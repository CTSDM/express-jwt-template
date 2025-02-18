// Only for pg
import { Pool } from "pg";
import { env } from "../../config/config.js";

const pool = new Pool({
    connectionString: env.database.url,
});

export { pool };
