const { Meal } = require('../models')

const create = async (req, res) => {
  try {
    req.body.profileId = req.user.profile.id
    const meal = await Meal.create(req.body)
    res.status(200).json(meal)
  } catch (error) {

  }
}


module.exports = {
  create,
}