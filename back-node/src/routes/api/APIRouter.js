const express = require('express');
const router = express.Router();
const APIController = require('../../controllers/api/APIController');

//Rutas
router.get('/', APIController.index);
router.post("/create", APIController.store);
router.put("/modifier/:id", APIController.modifier);
router.put('/delete/:id', APIController.delete); 

module.exports = router;