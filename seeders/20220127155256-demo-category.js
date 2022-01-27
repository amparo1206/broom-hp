'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Categories', [
      {
      name: 'Pro',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: 'Noob',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SemiPro',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ])

  },

  async down (queryInterface, Sequelize) {
  }
};
