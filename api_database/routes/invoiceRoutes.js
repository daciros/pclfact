const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const {authorize} = require('../middleware/authorize');
router.get('/', authorize, invoiceController.getInvoices);
router.get('/:id', authorize, invoiceController.getInvoiceById);
router.post('/', authorize, invoiceController.createInvoice);
router.put('/:id', authorize, invoiceController.updateInvoice);
router.delete('/:id', authorize, invoiceController.deleteInvoice);

module.exports = router;