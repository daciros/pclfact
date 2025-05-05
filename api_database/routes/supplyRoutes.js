const express = require('express');
const router = express.Router();
const supplyController = require('../controllers/supplyController');
const { authorize } = require('../middleware/authorize');

router.get('/', authorize, supplyController.getAllSupplies);
router.get('/:id', authorize, supplyController.getSupplyById);
router.post('/', authorize, supplyController.createSupply);
router.put('/:id', authorize, supplyController.updateSupply);
router.delete('/:id', authorize, supplyController.deleteSupply);

module.exports = router;