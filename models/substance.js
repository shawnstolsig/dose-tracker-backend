'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Substance extends Model {
        static associate(models) {
            models.Substance.hasMany(models.Dose, {
                foreignKey: 'substanceId'
            })
            models.Substance.belongsTo(models.User)
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