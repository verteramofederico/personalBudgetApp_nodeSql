const path = require('path');
const db = require('../../database/models');
const sequelize = require("sequelize");
const { Op } = sequelize;

const express = require("express");

const APIController = {
    index: async (req, res) => {
        try {
            const incomes = await db.Income.findAll({
                include: ["IncomesCategories"],
                where:{active: 1} })
            const expenses = await db.Expense.findAll({
                include: ["ExpensesCategories"],
                where:{active: 1} })

            incomes.forEach(income =>{
                income.dataValues.type= "Income";
                income.dataValues.detail = `http://localhost:3001/api/${income.id}`;
            }); 
            expenses.forEach(expense =>{
                expense.dataValues.type= "Expense";
                expense.dataValues.detail = `http://localhost:3001/api/${expense.id}`;
            }); 

            res.status(200).json({status:200, incomes: {incomes}, expenses: {expenses}})

        }catch (error) {
            throw error;
        }
    },
    store: async (req, res) => {
        console.log(req.body)
        try {
            if (req.body.type === 'income') {
                    const incomes = await db.Income.create({
                    concept: req.body.concept,
                    amount: req.body.amount,
                    date: req.body.date,
                    categoriesId: req.body.categoriesId
                })
            }       
            if (req.body.type === 'expense') {
                    const expenses = await db.Expense.create({
                    concept: req.body.concept,
                    amount: req.body.amount,
                    date: req.body.date,
                    categoriesId: req.body.categoriesId
                })
            }
            }
        catch (error) {
                res.send(error)
            } 
        }, 
    modifier: async (req, res) => {
        console.log(req.body)
        try {
            let idParams = req.params.id;
            if (req.body.type === 'Income') {
                    const income = await db.Income.update({
                        concept: req.body.concept,
                        amount: req.body.amount,
                        date: req.body.date,
                },{
                    where: {id: idParams}
                })
            }
            if (req.body.type === 'Expense') {
                    const expense = await db.Expense.update({
                        concept: req.body.concept,
                        amount: req.body.amount,
                        date: req.body.date,
                },{
                    where: {id: idParams}
                })
            }
            }
        catch (error) {
                res.send(error)
            }
    }
    , 
    delete: async (req, res) => {
        console.log(req.body)
        try {
            let idParams = req.params.id;
            if (req.body.type === 'Income') {
                    const income = await db.Income.update({
                        active: 0
                },{
                    where: {id: idParams}
                })
            }
            if (req.body.type === 'Expense') {
                    const expense = await db.Expense.update({
                        active: 0
                },{
                    where: {id: idParams}
                })
            }
            }
        catch (error) {
                res.send(error)
            }
    }
}

module.exports = APIController;