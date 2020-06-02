const db = require('./connection.js')

module.exports = {
  // SELECT all
  getAll(table,cb) {
    db.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) { console.log(err) }
      cb(data)
    })
  },
  // GET one
  getAllWhere (table, where, cb) {
    db.query(`SELECT * FROM ${table} WHERE ?`, where, (err, data) => {
      if (err) { console.log(err) }
      cb(data)
    })
  },
  // INSERT one
  createOne (table, data, cb) {
    db.query(`INSERT INTO ${table} SET ?`, data, (err, info) => {
      if (err) { console.log(err) }
      cb(info)
    })
  },
  // UPDATE one
  updateOne (table, changes, where, cb) {
    db.query(`UPDATE ${table} SET ? WHERE ?`,[changes, where], (err,info) => {
      if (err) { console.log(err) }
      cb(info)
    })
  }
}



