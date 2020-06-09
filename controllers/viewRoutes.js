const router = require('express').Router()
const { Burger } = require('../models/index')

router.get('/', (req, res) => {
  Burger.getBurgers(burgers => {
    res.render('index', { burgers })
  })
})

module.exports = router