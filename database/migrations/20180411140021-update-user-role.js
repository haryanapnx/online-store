'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.changeColumn('users','role', {type: Sequelize.STRING, defaultValue:"customer" });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users','role', {type: Sequelize.STRING, defaultValue:null});
  }
};
