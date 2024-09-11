const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockContoller');

// Definir las rutas para el stock
router.get('/', stockController.getStocks);
router.get('/:id', stockController.getStockById);
router.post('/', stockController.createStock);
router.put('/:id', stockController.updateStock);
router.delete('/:id', stockController.deleteStock);

module.exports = router;
