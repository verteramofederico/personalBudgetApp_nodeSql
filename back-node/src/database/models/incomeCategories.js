module.exports = (sequelize, DataTypes) => {
  let alias = 'IncomeCategory';
  let cols = {
          id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
              allowNull: false,         
          },
          name: {
              type: DataTypes.STRING,
          }    
      };

  let config = {
      timestamps: false,
  };

  const IncomeCategory = sequelize.define(alias,cols,config);

  IncomeCategory.associate = (models) => {
    IncomeCategory.hasMany(models.Income, {
          as: 'incomes',
          foreignKey: 'categoriesId'
      })
  }

  return IncomeCategory;
}