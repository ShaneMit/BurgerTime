const orm = require('../config/orm.js')

module.exports = {
  getBurg (cb) {
    orm.getAll('burgers', burgers => cb(burgers))
  },
  addBurg (burger, cb) {
    orm.createOne('burgers', burger, info => cb(info))
  },
  updateBurg (changes, where, cb) {
    orm.updateOne('burgers', changes, where, info => cb(info))
  }
}

