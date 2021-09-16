const express = require("express");
const path = require("path")
const router = require("../routes/mainRouter")

const mainController = {
    home: (req, res) => 
    res.render('home'),
    create: (req, res) => { 
        res.send(req.body)
    }
    }


// exportamos el resultado
module.exports = mainController