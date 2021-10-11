const mysql = require('mysql2');
require('dotenv').config();

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'bentJ@ckal43',
  database: 'employee_db',
});

module.exports = dbConnection;
