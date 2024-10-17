const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Definir las rutas para inventario
router.get('/', inventoryController.getInventories);
router.get('/:id', inventoryController.getInventoryById);
router.post('/', inventoryController.createInventory);
router.put('/:id', inventoryController.updateInventory);
router.delete('/:id', inventoryController.deleteInventory);

module.exports = router;
