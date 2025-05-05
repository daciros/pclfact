// api_database/controllers/paymentController.js
const paymentService = require('../services/paymentService');

const getAllPayments = async (req, res) => {
  try {
    const payments = await paymentService.getAllPayments();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const payment = await paymentService.getPaymentById(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPayment = async (req, res) => {
  try {
    const newPayment = await paymentService.createPayment(req.body);
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePayment = async (req, res) => {
  try {
    const updatedPayment = await paymentService.updatePayment(req.params.id, req.body);
    if (!updatedPayment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json(updatedPayment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePayment = async (req, res) => {
  try {
    const payment = await paymentService.deletePayment(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getAllPayments,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment,
};