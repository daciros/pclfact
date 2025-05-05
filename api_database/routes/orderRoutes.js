const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
//const authorize = require('../middleware/authorize');
const { authorize } = require('../middleware/authorize');
router.get('/', authorize, orderController.getOrders);
router.get('/:id', authorize, orderController.getOrderById);
router.post('/', authorize, orderController.createOrder);
router.put('/:id', authorize, orderController.updateOrder);
router.delete('/:id', authorize, orderController.deleteOrder);

module.exports = router;