const axios = require('axios');

const API_DATA_URL = 'http://localhost:3090/api/invoices';

// Create a new invoice
exports.createInvoice = async (req, res) => {
  try {
    const response = await axios.post(API_DATA_URL, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all invoices
exports.getInvoices = async (req, res) => {
  try {
    const response = await axios.get(API_DATA_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an invoice by ID
exports.getInvoiceById = async (req, res) => {
  try {
    const response = await axios.get(`${API_DATA_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ message: 'Invoice not found' });
  }
};

// Update an invoice by ID
exports.updateInvoice = async (req, res) => {
  try {
    const response = await axios.put(`${API_DATA_URL}/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an invoice by ID
exports.deleteInvoice = async (req, res) => {
  try {
    await axios.delete(`${API_DATA_URL}/${req.params.id}`);
    res.status(204).json();
  } catch (error) {
    res.status(404).json({ message: 'Invoice not found' });
  }
};