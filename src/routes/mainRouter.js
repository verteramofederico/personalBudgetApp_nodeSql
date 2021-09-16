const express = require("express");
const router = express.Router();

// controller
const mainController = require("../controllers/mainController")

// routes
router.get("/", mainController.home);

module.exports = router; 