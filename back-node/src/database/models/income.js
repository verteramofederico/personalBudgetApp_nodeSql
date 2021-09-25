module.exports = (sequelize, dataTypes) => {
  let alias = 'Income'
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
          },
          categoriesId: { 
              type: dataTypes.INTEGER,
              allowNull: true, 
          },   
  };
  let config = {
      timestamps: false
  }
  const Income = sequelize.define(alias,cols,config)

  Income.associate = (models) =>{
      Income.belongsTo(models.IncomesCategories, {
      as: "IncomesCategories",
      foreignKey: "categoriesId"
  })
  }

  return Income
}