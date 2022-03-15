'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('users', [{

            // TODO: Pickup here....combine seeders into one file?
            // How to specify id's for foreign keys?  Is bulkInser allowed w/ ids?

            // id: 1,
            username: 'hylary@email.com',
            lastLogin: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            // id: 2,
            username: 'shawn@email.com',
            lastLogin: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        }], {})
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {})
    }
};
