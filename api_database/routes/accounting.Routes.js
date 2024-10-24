const express = require('express');
const router = express.Router();
const accountingController = require('../controllers/accountingController');

// Definir las rutas para contabilidad
router.get('/', accountingController.getTransactions);
router.get('/:id', accountingController.getTransactionById);
router.post('/', accountingController.createTransaction);
router.put('/:id', accountingController.updateTransaction);
router.delete('/:id', accountingController.deleteTransaction);

module.exports = router;
