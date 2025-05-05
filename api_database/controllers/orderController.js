// controllers/orderController.js

const orderService = require('../services/orderService');

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const newOrder = await orderService.createOrder(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order', details: error.message });
    }
};

// Get all orders
exports.getOrders = async (req, res) => {
    try {
        const allOrders = await orderService.getAllOrders();
        res.status(200).json(allOrders);
    } catch (error) {
        console.error('Error getting orders:', error);
        res.status(500).json({ error: 'Failed to retrieve orders', details: error.message });
    }
};

// Get an order by ID
exports.getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const foundOrder = await orderService.getOrderById(id);
        if (!foundOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(foundOrder);
    } catch (error) {
        console.error('Error getting order by ID:', error);
        res.status(500).json({ error: 'Failed to retrieve order', details: error.message });
    }
};

// Update an order by ID
exports.updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedOrder = await orderService.updateOrder(id, req.body);
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(updatedOrder);
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ error: 'Failed to update order', details: error.message });
    }
};

// Delete an order by ID
exports.deleteOrder = async (req, res) => {
    try {
        await orderService.deleteOrder(req.params.id);
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error('Error deleting order:', error);
        res.status(500).json({ error: 'Failed to delete order', details: error.message });
    }
};
