'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderBroom extends Model {
    static associate(models) {
    }
  }
  OrderBroom.init({
    OrderId: DataTypes.INTEGER,
    BroomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderBroom',
  });
  return OrderBroom;
};