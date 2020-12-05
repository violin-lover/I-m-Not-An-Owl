const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'sql3.freemysqlhosting.net',
  user: 'sql3380167',
  database: 'sql3380167',
  password: 'TXjmpfFCk8'
});

connection.connect();
module.exports = connection;