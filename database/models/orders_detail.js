'use strict';
module.exports = (sequelize, DataTypes) => {
  var orders_detail = sequelize.define('orders_detail', {
    id_order: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    qty: DataTypes.INTEGER
  }, {});
  orders_detail.associate = function(models) {
    // associations can be defined here
  };
  return orders_detail;
};