'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class User extends Model {
        static associate(models) {
            models.User.hasMany(models.Dose, {
                foreignKey: 'userId'
            })
            models.User.hasMany(models.Substance, {
                foreignKey: 'userId'
            })
        }
    }

    User.init({
        email: DataTypes.STRING,
        nickname: DataTypes.STRING,
        lastLogin: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users'
    });

    return User;
};