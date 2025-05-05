const axios = require('axios');

const API_DATA_URL = 'http://localhost:3090/api/products';

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const response = await axios.get(API_DATA_URL);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const response = await axios.post(API_DATA_URL, req.body);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
    try {
        const response = await axios.get(`${API_DATA_URL}/${req.params.id}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        const response = await axios.put(`${API_DATA_URL}/${req.params.id}`, req.body);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {   
    try {
        await axios.delete(`${API_DATA_URL}/${req.params.id}`);
        res.status(200).json({ message: "product delete successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};