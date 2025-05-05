// api_dataLayer/controllers/supplier.Controller.js
const axios = require('axios');

const API_DATABASE_URL = 'http://localhost:3090/api/suppliers';

exports.getAllSuppliers = async (req, res) => {
  try {
    const response = await axios.get(API_DATABASE_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching suppliers' });
  }
};

exports.getSupplierById = async (req, res) => {
  try {
    const response = await axios.get(`${API_DATABASE_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ message: 'Supplier not found' });
  }
};

exports.createSupplier = async (req, res) => {
  try {
    const response = await axios.post(API_DATABASE_URL, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(400).json({ message: 'Error creating supplier' });
  }
};

exports.updateSupplier = async (req, res) => {
  try {
    const response = await axios.put(`${API_DATABASE_URL}/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: 'Error updating supplier' });
  }
};

exports.deleteSupplier = async (req, res) => {
  try {
    await axios.delete(`${API_DATABASE_URL}/${req.params.id}`);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: 'Supplier not found' });
  }
};