const axios = require('axios');

const API_DATA_URL = 'http://localhost:3090/api/inventories';

// Create a new inventory
exports.createInventory = async (req, res) => {
    try {
        const response = await axios.post(API_DATA_URL, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all inventories
exports.getAllInventories = async (req, res) => {
    try {
        const response = await axios.get(API_DATA_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error getting inventories' });
    }
};

// Obtener un producto por ID
exports.getInventoryById = async (req, res) => {
    try {
        const response = await axios.get(`${API_DATA_URL}/${req.params.id}`);
        res.json(response.data);
    } catch (error) {        
        res.status(404).json({ message: 'Inventory not found' });
    }
};

// Actualizar un producto por ID
exports.updateInventory = async (req, res) => {
    try {
        const response = await axios.put(`${API_DATA_URL}/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
       res.status(400).json({ message: 'Error updating inventory' });
    }
};

// Eliminar un producto por ID
exports.deleteInventory = async (req, res) => {
    try {
        await axios.delete(`${API_DATA_URL}/${req.params.id}`);
        res.status(204).json();
    } catch (error) {
        res.status(404).json({ message: 'Error deleting inventory' });
    }
};