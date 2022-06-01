'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Substance extends Model {
        static associate(models) {
            models.Substance.hasMany(models.Dose, {
                foreignKey: 'substanceId', as: 'doses'
            })
            models.Substance.belongsTo(models.User,{
                foreignKey: 'userId', as: 'user'
            })
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