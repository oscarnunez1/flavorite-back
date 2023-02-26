const { Meal } = require('../models')

async function create(req, res) {
  try {
    req.body.profileId = req.user.profile.id
    const meal = await Meal.create(req.body)
    res.status(200).json(meal)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    console.log("INDEX", req.body)
    const meals = await Meal.findAll({
      where: {
        profileId: req.user.profile.id
      },
      order: [
        ['id', 'DESC']
      ]
    })
    res.status(200).json(meals)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}



module.exports = {
  create,
  index,
}