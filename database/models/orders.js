'use strict';
module.exports = (sequelize, DataTypes) => {
  var orders = sequelize.define('orders', {
    id_user: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};