'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Orders', [
      {
        UserId: 1,
        Status: 'Process',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        Status: 'Acepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },


  async down (queryInterface, Sequelize) {

  }
};
