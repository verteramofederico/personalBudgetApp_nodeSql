const path = require('path');
const db = require('../../database/models');
const sequelize = require("sequelize");
const { Op } = sequelize;



const APIController = {
    index: async (req, res) => {
        try {
            const incomes = await db.Income.findAll({where:{active: 1}})  
            const expenses = await db.Expense.findAll({where:{active: 1}})

            incomes.forEach(income =>{
                income.dataValues.detail = `http://localhost:3001/api/${income.id}`;
            }); 

            res.status(200).json({status:200, incomes: {incomes}, expenses: {expenses}})

        }catch (error) {
            throw error;
        }
    }
    ,
    detail: async (req, res) => {
        try {
            const income = await db.Income.findByPk(req.params.id);

            res.json({
                income: {income}
            })
        } catch (error) {
            throw error;
        }
    }
}

module.exports = APIController;