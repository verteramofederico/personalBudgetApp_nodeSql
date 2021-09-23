'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('ExpensesCategories', [{
        id: 1,
        name: 'House',
      },{
        id: 2,
        name: 'Clothes',
      },{
        id: 3,
        name: "Health"
      },{
        id: 4,
        name: "Others expenses"
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('ExpenseCategory', null, {});

  }
};
