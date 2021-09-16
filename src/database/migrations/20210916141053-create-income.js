'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Incomes', {
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
        allowNull: false,
        type: Sequelize.DATE
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
          model: "incomeCategories",
          key: "id"
        }
      }, 
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Incomes');
  }
};