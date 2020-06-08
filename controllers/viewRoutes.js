const router = require('express').Router()
const { Burger } = require('../models/burger.js')

router.get('/', (req, res) => {
  Burger.getBurg(burgers => {
    res.render('burgers', { burgers })
  })
})

module.exports = router