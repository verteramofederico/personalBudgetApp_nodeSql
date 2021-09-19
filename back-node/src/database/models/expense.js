module.exports = (sequelize, dataTypes) => {
  let alias = 'Expense'
  let cols = {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: dataTypes.INTEGER
          },
          concept: {
          type: dataTypes.STRING(200),
          },
          amount: {
          type: dataTypes.INTEGER,
          },
          date: {
          type: dataTypes.STRING,
          },
          active: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          defaultValue: 1,  
          allowNull: false
          }
  };
  let config = {
      timestamps: false
  }
  const Expense = sequelize.define(alias,cols,config)
  
  return Expense
}