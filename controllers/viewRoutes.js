const router = require('express').Router()
const { Burger } = require('../models')

router.get('/', (req, res) => {
  Burger.getBurgers(burgers => {
    res.render('index', { burgers })
  })
})

module.exports = router