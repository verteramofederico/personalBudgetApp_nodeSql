const express = require('express');
const router = express.Router();
const APIController = require('../../controllers/api/APIController');

//Rutas
router.get('/', APIController.index);
router.get('/:id', APIController.detail);


module.exports = router;