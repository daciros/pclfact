const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoice.Controller.js');

// Definir las rutas para facturas
router.get('/', invoiceController.getInvoices);
router.get('/:id', invoiceController.getInvoiceById);
router.post('/', invoiceController.createInvoice);
router.put('/:id', invoiceController.updateInvoice);
router.delete('/:id', invoiceController.deleteInvoice);

module.exports = router;