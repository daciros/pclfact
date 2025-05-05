// api_database/services/orderService.js
const Order = require('../models/orderModel');

const getAllOrders = async () => {
  try {
    return await Order.find({});
  } catch (error) {
    console.error('Error getting all orders:', error);
    throw new Error('Error getting all orders');
  }
};

const getOrderById = async (id) => {
  try {
    const order = await Order.findById(id);
    if (!order) {
      throw new Error('Order not found');
    }
    return order;
  } catch (error) {
    console.error('Error getting order by ID:', error);
    throw new Error('Error getting order by ID');
  }
};

const createOrder = async (orderData) => {
  try {
    const newOrder = new Order(orderData);
    return await newOrder.save();
  } catch (error) {
    console.error('Error creating order:', error);
    throw new Error('Error creating order');
  }
};

const updateOrder = async (id, orderData) => {
  try {
    return await Order.findByIdAndUpdate(id, orderData, { new: true });
  } catch (error) {
    console.error('Error updating order:', error);
    throw new Error('Error updating order');
  }
};

const deleteOrder = async (id) => {
  try {
    return await Order.findByIdAndDelete(id);
  } catch (error) {
    console.error('Error deleting order:', error);
    throw new Error('Error deleting order');
  }
};

module.exports = { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder };