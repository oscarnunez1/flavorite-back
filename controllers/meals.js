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

async function update(req, res) {
  try {
    const meal = await Meal.findByPk(req.params.id)
    meal.set(req.body)
    await meal.save()

    res.status(200).json(meal)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findByPk(req.params.id)
    await meal.destroy()
    res.status(200).json(meal)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteMeal
}