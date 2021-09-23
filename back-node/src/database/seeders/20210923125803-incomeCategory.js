'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('IncomesCategories', [{
        id: 1,
        name: 'Job',
      },{
        id: 2,
        name: 'Freelance',
      },{
        id: 3,
        name: "Donations"
      },{
        id: 4,
        name: "Others incomes"
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('IncomeCategory', null, {});

  }
};
