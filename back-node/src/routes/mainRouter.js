const express = require("express");
const router = express.Router();
const path = require('path');

// controller
const mainController = require("../controllers/mainController")

// routes
router.get("/", mainController.home2);
router.post("/create", mainController.store);
router.put("/modifier/:id", mainController.modifier);
router.delete('/delete/:id', mainController.delete); 

module.exports = router; 