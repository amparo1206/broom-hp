'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'OrderBrooms', [
      {
      OrderId: 1,
      BroomId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        OrderId: 1,
        BroomId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        },
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
