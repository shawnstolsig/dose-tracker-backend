'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    lastLogin: DataTypes.DATE,

  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};