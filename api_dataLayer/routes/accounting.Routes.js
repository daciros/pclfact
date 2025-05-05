const express = require('express');
const router = express.Router();
const accountingController = require('../controllers/accounting.Controller.js');

// Definir las rutas para contabilidad
router.get('/', accountingController.getAllAccountings);
router.get('/:id', accountingController.getAccountingById);
router.post('/', accountingController.createAccounting);
router.put('/:id', accountingController.updateAccounting);
router.delete('/:id', accountingController.deleteAccounting);

module.exports = router;