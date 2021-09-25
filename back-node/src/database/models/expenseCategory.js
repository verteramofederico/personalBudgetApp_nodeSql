module.exports = (sequelize, DataTypes) => {
    let alias = 'ExpensesCategories';
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
  
    const ExpensesCategories = sequelize.define(alias,cols,config);
  
    ExpensesCategories.associate = (models) => {
        ExpensesCategories.hasMany(models.Expense, {
            as: 'Expense',
            foreignKey: 'categoriesId'
        })
    }
  
    return ExpensesCategories;
  }