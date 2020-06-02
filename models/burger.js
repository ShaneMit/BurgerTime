const orm = require('../config/orm')

module.exports = {
  getBurg (cb) {
    orm.getAll('burgers', burgers => cb(burgers))
  },
  getBurgWhere (where, cb) {
    orm.getAllWhere('burgers', where, burgers => cb(burgers))
  },
  addBurg (burger, cb) {
    orm.createOne('burgers', burger, info => cb(info))
  },
  updateBurg (changes, where, cb) {
    orm.updateOne('burgers', changes, where, info => cb(info))
  }
}

