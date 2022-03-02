// const { Sequelize, Model, DataTypes } = require('@sequelize/core');
const SQL = require('sequelize');

module.exports.createStore = () => {

    const db = new SQL(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
        dialect: 'postgres',
        logging: false,
    });

    const users = db.define('user', {
        id: {
            type: SQL.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: SQL.STRING,
        createdAt: SQL.DATE,
        updatedAt: SQL.DATE,
        lastLogin: SQL.DATE,
    });

    const doses = db.define('dose', {
        id: {
            type: SQL.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: SQL.INTEGER,
        substanceId: SQL.INTEGER,
        takenAt: SQL.DATE,
    });

    const substances = db.define('substance', {
        id: {
            type: SQL.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: SQL.STRING,
        image: SQL.STRING,
        userId: SQL.INTEGER,
        createdAt: SQL.DATE,
    });

    return { users, doses, substances };
};