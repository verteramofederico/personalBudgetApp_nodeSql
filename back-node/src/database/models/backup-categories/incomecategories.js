/* 'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class incomeCategories extends Model {
   
    static associate(models) {

    }
  };
  incomeCategories.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'incomeCategories',
  });
  return incomeCategories;
}; */