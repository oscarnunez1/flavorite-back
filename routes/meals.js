const router = require('express').Router()
const mealsCtrl = require('../controllers/meals.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, mealsCtrl.create)
router.get('/', checkAuth, mealsCtrl.index)
router.put('/:id', checkAuth, mealsCtrl.update)
router.delete('/:id', checkAuth, mealsCtrl.delete)


module.exports = router