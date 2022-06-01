'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Dose extends Model {
        static associate(models) {
            models.Dose.belongsTo(models.User,{
                foreignKey: 'userId', as: 'user'
            })
            models.Dose.belongsTo(models.Substance,{
                foreignKey: 'substanceId', as: 'substance'
            })
        }
    }

    Dose.init({
        userId: DataTypes.INTEGER,
        substanceId: DataTypes.INTEGER,
        takenAt: DataTypes.DATE,
        amount: DataTypes.INTEGER,
        unit: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Dose',
        tableName: 'doses'
    });

    return Dose;
};