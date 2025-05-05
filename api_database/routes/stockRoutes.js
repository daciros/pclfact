const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockContoller');
const {authorize} = require('../middleware/authorize');

router.get('/', authorize, stockController.getAllStocks);
router.get('/:id', authorize, stockController.getStockById);
router.post('/', authorize, stockController.createStock);
router.put('/:id', authorize, stockController.updateStock);
router.delete('/:id', authorize, stockController.deleteStock);

module.exports = router;