const express = require('express');
const router = express.Router();
const supplyController = require('../controllers/supply.Controller');

router.get('/', supplyController.getAllSupplies);
router.get('/:id', supplyController.getSupplyById);
router.post('/', supplyController.createSupply);
router.put('/:id', supplyController.updateSupply);
router.delete('/:id', supplyController.deleteSupply);

module.exports = router;