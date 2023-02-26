const router = require('express').Router()
const mealsCtrl = require('../controllers/meals.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/
router.get('/', mealsCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, mealsCtrl.create)
router.get('/', checkAuth, mealsCtrl.index)


module.exports = router