'use strict';
const Chance = require('chance');
const chance = new Chance();

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      const products = [];
      for (let i = 0; i < 10; i++) {
        let product = {
          name: chance.name(),
          description: chance.sentence(),
          price: chance.floating({fixed: 2}),
          stock: chance.integer({min:0, max: 999999})
        }
        products.push(product);
      } 
      return queryInterface.bulkInsert('products', products, {});    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
