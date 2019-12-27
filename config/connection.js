const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: process.env.USER_ID,
    password: process.env.PW_ID,
    database: "burgers_db"
  });
}
connection.connect();
module.exports = connection;