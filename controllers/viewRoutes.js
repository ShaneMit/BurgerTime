const router = require('express').Router()
const { Burger } = require('../models/burger.js')

router.get('/', (req, res) => {
  Burger.getBurger(burgers => {
    res.render('index', { burgers })
  })
})

module.exports = router