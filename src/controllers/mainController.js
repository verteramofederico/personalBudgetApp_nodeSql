const path = require("path")
const router = require("../routes/mainRouter")

const mainController = {
    home: (req, res) => 
    res.render('home')
    }


// exportamos el resultado
module.exports = mainController