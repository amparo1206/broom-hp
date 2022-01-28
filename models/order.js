'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User)
      Order.belongsToMany(models.Broom,{through:'OrderBroom', as: 'brooms', foreignKey: 'OrderId'})
    }
  }
  Order.init({
    UserId: DataTypes.INTEGER,
    Status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};