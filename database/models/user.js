'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.TEXT,
    phone: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};