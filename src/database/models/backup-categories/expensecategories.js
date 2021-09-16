/* 'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class expenseCategories extends Model {
    
    static associate(models) {

    }
  };
  expenseCategories.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'expenseCategories',
  });
  return expenseCategories;
}; */