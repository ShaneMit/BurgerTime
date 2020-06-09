const router = require('express').Router()

router.use('/api', require('./burgers_controller.js'))
router.use(require('./viewRoutes'))

module.exports = router