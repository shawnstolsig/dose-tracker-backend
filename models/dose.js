'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dose extends Model {
    static associate(models) {
      // define association here
    }
  }
  Dose.init({
    userId: DataTypes.INTEGER,
    substanceId: DataTypes.INTEGER,
    takenAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Dose',
    tableName: 'doses'
  });
  return Dose;
};