const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authorize } = require('../middleware/authorize');

router.get('/', authorize, productController.getAllProducts);
router.get('/:id', authorize, productController.getProductById);
router.post('/', authorize, productController.createProduct);
router.put('/:id', authorize, productController.updateProduct);
router.delete('/:id', authorize, productController.deleteProduct);

module.exports = router;