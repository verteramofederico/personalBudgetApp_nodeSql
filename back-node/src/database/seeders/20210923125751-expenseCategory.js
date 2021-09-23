'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('ExpensesCategories', [
        {
          id: 1,
          name: 'undefined',
        },{
        id: 2,
        name: 'House',
      },{
        id: 3,
        name: 'Clothes',
      },{
        id: 4,
        name: "Health"
      },{
        id: 5,
        name: "Others expenses"
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('ExpensesCategories', null, {});

  }
};
