'use strict';
module.exports = (sequelize, DataTypes) => {
  var orders = sequelize.define('orders', {
    id_user: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
    orders.belongsTo(models.user, {foreignKey:'id_user', targetKey:'id'})
    // associations can be defined here
  };
  return orders;
};