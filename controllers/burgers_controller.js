const router = require('express').Router()
const Burger = require('../models/burger.js')
// GET all burgers
router.get('/burgers', (req, res) => Burger
.getBurg(burgers => res.json(burgers)))

// GET one burger
router.get('/burgers/:id', (req, res) => Burger
.getBurgWhere({ id: req.params.id }, burger => res.json(burger)))

// POST one burger
router.post('/burgers', (req, res) => Burger
.addBurg(req.body, info => res.json(info)))

// PUT one burger
router.put('/burgers/:id', (req, res) => Burger
.updateBurg(req.body, { id: req.params.id }, info => res.json(info)))

module.exports = router