module.exports = (sequelize, DataTypes) => {
  let alias = 'IncomesCategories';
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

  const IncomesCategories = sequelize.define(alias,cols,config);

  IncomesCategories.associate = (models) => {
    IncomesCategories.hasMany(models.Income, {
          as: 'Income',
          foreignKey: 'categoriesId'
      })
  }

  return IncomesCategories;
}