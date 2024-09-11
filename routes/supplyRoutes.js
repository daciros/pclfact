const express = require('express');
const router = express.Router();
const supplyController = require('../controllers/supplyController');

// Definir las rutas para suministros
router.get('/', supplyController.getSupplies);
router.get('/:id', supplyController.getSupplyById);
router.post('/', supplyController.createSupply);
router.put('/:id', supplyController.updateSupply);
router.delete('/:id', supplyController.deleteSupply);

module.exports = router;
