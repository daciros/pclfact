const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
//const authorize = require('../middleware/authorize');
const { authorize } = require('../middleware/authorize');
router.get('/', authorize, inventoryController.getAllInventories);
router.get('/:id', authorize, inventoryController.getInventoryById);
router.post('/', authorize, inventoryController.createInventory);
router.put('/:id', authorize, inventoryController.updateInventory);
router.delete('/:id', authorize, inventoryController.deleteInventory);

module.exports = router;