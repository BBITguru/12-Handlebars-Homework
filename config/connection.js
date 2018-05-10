// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
// // Local Host DB
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "burgers_db",
//   port: 8889

// // // JawsDB:mysql
// //   host: "umabrisfx8afs3ja.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
// //   user: "f47o1mlmy0csnt8q",
// //   password: "	adtkyvmm9q8gihje",
// //   port: "3306",
// //   database: "ouoznmf8kbybuysm"
// });

// JAWSDB:mysql
var connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;