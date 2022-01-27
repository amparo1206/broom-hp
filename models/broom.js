'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Broom extends Model {
    static associate(models) {
      Broom.belongsTo(models.Category);
      Broom.belongsToMany(models.Order, { through: 'OrderBroom', as: 'orders', foreignKey: 'OrderId' },{onDelete: 'cascade'});
    }
  }
  Broom.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Broom',
  });
  return Broom;
};