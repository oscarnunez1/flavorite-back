'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meal extends Model {
    static associate(models) {
      Meal.belongsTo(models.Profile, { foreignKey: 'profileId' })
    }
  }
  Meal.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    photo: DataTypes.STRING,
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      }
    }
  }, {
    sequelize,
    modelName: 'Meal',
  });
  return Meal;
};