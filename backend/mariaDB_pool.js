const mariaDB = require('mariadb');

const pool = mariaDB.createPool({
  host
  port:4033,
  user:dbpwf36349833,
  password:
  database:kyungil_university,
  connectionLimit:5
});