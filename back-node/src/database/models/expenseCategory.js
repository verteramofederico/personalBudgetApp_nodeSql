module.exports = (sequelize, DataTypes) => {
    let alias = 'ExpenseCategory';
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
  
    const ExpenseCategory = sequelize.define(alias,cols,config);
  
    ExpenseCategory.associate = (models) => {
        ExpenseCategory.hasMany(models.Expense, {
            as: 'expenses',
            foreignKey: 'categoriesId'
        })
    }
  
    return ExpenseCategory;
  }