'use strict';
const Chance = require('chance');
const chance = new Chance();

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      const products = [];
      for (let i = 0; i < 10; i++) {
        let product = {
          name: chance.word(),
          description: chance.sentence(),
          price: chance.integer({min: 10000, max: 100000}), 
          stock: chance.integer({min:0, max: 100})
        }
        products.push(product);
      } 
      return queryInterface.bulkInsert('products', products, {});    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('products', null, {});
    
  }
};
