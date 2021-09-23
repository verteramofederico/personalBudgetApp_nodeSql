const express = require('express');
const router = express.Router();
const APIController = require('../../controllers/api/APIController');

//Rutas
router.get('/', APIController.index);
router.get('/:id', APIController.detail);
router.post("/create", APIController.store);

module.exports = router;