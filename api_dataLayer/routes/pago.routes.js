const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pago.Controller');

router.get('/', pagoController.getAllPayments);
router.post('/', pagoController.createPayment);
router.get('/:id', pagoController.getPaymentById);
router.put('/:id', pagoController.updatePayment);
router.delete('/:id', pagoController.deletePayment);

module.exports = router;