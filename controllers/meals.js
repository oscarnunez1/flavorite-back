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
    console.log("UPDATE", req.body);
    const meal = await Meal.update(
      req.body,
      { where: { id: req.params.id }, returning: true }
    )
    res.status(200).json(meal)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function deleteMeal(req, res) {
  try {
    console.log("DELETED MEAL". req.body)
    const deletedMeal = await Meal.destroy(
      { where: { id: req.params.id } }
    )
    res.status(200).json(deletedMeal)
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