const Pool = require("pg").Pool; //postgres documentation
require("dotenv").config();

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 5432,
  database: "todoapp",
});

//code help communicate with postgres database

module.exports = pool;
