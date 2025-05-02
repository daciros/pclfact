// controllers/accounting.Controller.js

const Accounting = require('../models/accounting.Model.js');

// Crear una nueva transacción contable
exports.createTransaction = async (req, res) => {
  try {
    const transaction = new Accounting(req.body);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las transacciones contables
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Accounting.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una transacción contable por ID
exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Accounting.findById(req.params.id);
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una transacción contable por ID
exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Accounting.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una transacción contable por ID
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Accounting.findByIdAndDelete(req.params.id);
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};