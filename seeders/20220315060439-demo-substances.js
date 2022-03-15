'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('substances', [{
            // id: 1,
            name: 'Tylenol',
            image: 'https://orderacme.s3.amazonaws.com/ProductImages/00300450449054.full.jpg',
            userId: null,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            // id: 2,
            name: 'Ibuprofen',
            image: 'https://www.kroger.com/product/images/large/front/0001111079990',
            userId: null,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            // id: 3,
            name: 'Pepcid AC',
            image: 'https://target.scene7.com/is/image/Target/GUEST_c5df2791-e05f-46f5-bdb1-e8651546c65b?wid=250&hei=250&fmt=pjpeg',
            userId: null,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            // id: 4,
            name: 'Pepto Bismol',
            image: 'https://i5.peapod.com/c/OY/OYXT7.png',
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            // id: 5,
            name: 'Tums',
            image: 'https://images.albertsons-media.com/is/image/ABS/159010140?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available',
            userId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {})
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('substances', null, {})
    }
};
