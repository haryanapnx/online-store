'use strict';

const Chance = require('chance')

const chance = new Chance()

module.exports = {
  up: (queryInterface, Sequelize) => {
      const users = []
      for (let index = 0; index < 10; index++) {
        let user = {
          username: chance.first(),
          password: chance.string({length:5}),
          email: chance.email(),
          address: chance.address(),
          phone: chance.phone(),
          role: chance.pickone(['user', 'admin']),
          token: chance.string({length:30})
        }
        users.push(user)
      }
      return queryInterface.bulkInsert('users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
