'use strict';

const {SequelizeScopeError} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('doses', 'amount', {
          type: Sequelize.DataTypes.INTEGER
        }, { transaction: t }),
        queryInterface.addColumn('doses', 'unit', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('doses', 'amount', { transaction: t }),
        queryInterface.removeColumn('doses', 'unit', { transaction: t })
      ]);
    });
  }

};
