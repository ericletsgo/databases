var mysql = require('mysql');
var Promise = require('bluebird');


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var con = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat',
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw error;
  console.log('connected!')
})

// module.exports = {
//   // con: con,
//   // con.connect:con.connect
// }

module.exports.con = con;