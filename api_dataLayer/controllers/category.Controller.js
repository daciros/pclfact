const axios = require('axios');

const API_DATABASE_URL = 'http://localhost:3090/api/categories';

const getAllCategories = async (req, res) => {
  try {
    const response = await axios.get(API_DATABASE_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const response = await axios.get(`${API_DATABASE_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ message: 'Category not found' });
  }
};

const createCategory = async (req, res) => {
  try {
    const response = await axios.post(API_DATABASE_URL, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const response = await axios.put(`${API_DATABASE_URL}/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    await axios.delete(`${API_DATABASE_URL}/${req.params.id}`);
    res.status(204).json();
  } catch (error) {
    res.status(404).json({ message: 'Category not found' });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};