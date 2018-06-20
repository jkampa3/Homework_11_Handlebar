// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "croEtLu4rO",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("Error Connecting: " + err.stack);
    return;
  }
  console.log("Now Connected As ID " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
