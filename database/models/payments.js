'use strict';
module.exports = (sequelize, DataTypes) => {
  var payments = sequelize.define('payments', {
    id_order: DataTypes.INTEGER
  }, {});
  payments.associate = function(models) {
    // associations can be defined here
  };
  return payments;
};