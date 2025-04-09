const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: process.env.MARIADB_HOST,
  port: process.env.MARIADB_PORT,
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DATABASE,
  connectionLimit: 10,
  ssl: {
    rejectUnauthorized: true
  }
});

module.exports = pool;