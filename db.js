const Pool = require("pg").Pool;

const pool = new Pool({
  user: "manikatex",
  password: "Manika#$%5",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;