const express = require("express");
const path = require("path")
const router = require("../routes/mainRouter")

// Modelos Sequelize
const db = require('../database/models');
const sequelize = require("sequelize");
const { Op } = sequelize;
const { like } = Op


const mainController = {
    home: (req, res) => 
    res.render('home'),
    home2: async (req, res) => {
        try {
            const incomes = await db.Income.findAll()
            const expenses = await db.Expense.findAll()
            res.render('home', {incomes, expenses})
        }  

        catch (error) {
            res.send(error)
        }
    },
    create: (req, res) => { 
        res.send(req.body)
    },
    store: async (req, res) => {
        try {
            if (req.body.type === 'income') {
                    const income = await db.Income.create({
                    concept: req.body.concept,
                    amount: req.body.amount,
                    date: req.body.date
                })
                return res.redirect("/")}
            
            if (req.body.type === 'expense') {
                    const income = await db.Expense.create({
                    concept: req.body.concept,
                    amount: req.body.amount,
                    date: req.body.date
                })
                return res.redirect("/")}
            }
        catch (error) {
                res.send(error)
            }
        },
    modifier: async (req, res) => {
        let idReq = req.params.id
        try {
            if (req.body.type === 'incomes') {
                    const incomeToDelete = await db.Income.update(
                        {
                            concept: req.body.concept,
                            amount: req.body.amount,
                            date: req.body.date
                        },
                        {where: {id: idReq}}
                    )
                }
            if (req.body.type === 'expenses') {
                    const expenseToDelete = await db.Expense.update(
                        {
                            concept: req.body.concept,
                            amount: req.body.amount,
                            date: req.body.date
                        },
                        {where: {id: idReq}}
                    )
                }
            return res.redirect("/")
        } 
        catch (error) {
            res.send(error)
        }
    },   
    delete: async (req, res) => {
        let idReq = req.params.id
        try {
            if (req.body.type === 'incomes') {
                    const incomeToDelete = await db.Income.update(
                        {active: 0},
                        {where: {id: idReq}}
                    )
                }
            if (req.body.type === 'expenses') {
                    const expenseToDelete = await db.Expense.update(
                        {active: 0},
                        {where: {id: idReq}}
                    )
                }
            return res.redirect("/")
        } 
        catch (error) {
            res.send(error)
        }
    },
    }


// exportamos el resultado
module.exports = mainController