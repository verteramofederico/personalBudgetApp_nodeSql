'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Expenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      concept: {
        type: Sequelize.STRING(200)
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BIGINT(10).UNSIGNED,
        defaultValue: 1,  
        allowNull: false
      },
      categoriesId: { 
        type: Sequelize.INTEGER,
        allowNull: true, 
        references: {
          model: "expenseCategories",
          key: "id"
        }
      }, 
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Expenses');
  }
};