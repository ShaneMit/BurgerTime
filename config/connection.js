const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'burgers_db'
})

module.exports = db