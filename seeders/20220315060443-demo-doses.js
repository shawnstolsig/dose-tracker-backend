'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('doses', [{
            userId: 1,
            substanceId: 2,
            takenAt: new Date(),
            amount: 800,
            unit: 'mg',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            userId: 1,
            substanceId: 4,
            takenAt: new Date(),
            amount: 1,
            unit: 'chewable',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            userId: 1,
            substanceId: 1,
            takenAt: new Date(),
            amount: 1000,
            unit: 'mg',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            userId: 2,
            substanceId: 5,
            takenAt: new Date(),
            amount: 1000,
            unit: null,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            userId: 2,
            substanceId: 5,
            takenAt: new Date(),
            amount: 1000,
            unit: null,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            userId: 2,
            substanceId: 5,
            takenAt: new Date(),
            amount: 1000,
            unit: null,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {})
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('doses', null, {})
    }
};
