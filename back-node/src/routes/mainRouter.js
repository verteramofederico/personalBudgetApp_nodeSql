const express = require("express");
const router = express.Router();
const path = require('path');

// controller
const mainController = require("../controllers/mainController")

// routes
router.get("/", mainController.home);
router.post("/create", mainController.create);

module.exports = router; 