const mysql = require("mysql");

const dbConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DBNAME,
});

dbConnection.connect((error) => {
  if (error) throw error;
  console.log("Connected MySql ~");
});

module.exports = dbConnection;
