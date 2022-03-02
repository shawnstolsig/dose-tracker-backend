'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Substance extends Model {
    static associate(models) {
      // define association here
    }
  }
  Substance.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Substance',
    tableName: 'substances'
  });
  return Substance;
};