'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Brooms', [
      {
      name: 'Barredora',
      price: 30,
      CategoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: 'Saeta',
        price: 129,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Comet',
        price: 70,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ])

  },

  async down (queryInterface, Sequelize) {
  }
};
