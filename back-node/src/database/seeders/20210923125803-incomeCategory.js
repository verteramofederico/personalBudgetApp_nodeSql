'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('IncomesCategories', [
        {
          id: 1,
          name: 'undefined',
        },{
        id: 2,
        name: 'Job',
      },{
        id: 3,
        name: 'Freelance',
      },{
        id: 4,
        name: "Donations"
      },{
        id: 5,
        name: "Others incomes"
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('IncomesCategories', null, {});

  }
};
