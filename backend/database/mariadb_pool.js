const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: process.env.MARIADB_HOST,
  port: process.env.MARIADB_PORT,
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DATABASE,
  connectionLimit: process.env_MARIADB_CONNECTION_LIMIT,
  ssl: {
    rejectUnauthorized: true
  }
});

module.exports = pool;