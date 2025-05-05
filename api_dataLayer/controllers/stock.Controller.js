const axios = require('axios');

// URL de la api database
const API_DATA_URL = 'http://localhost:3090/api/stocks';

exports.getAllStocks = async (req, res) => {
    try {
        const response = await axios.get(API_DATA_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los stocks', error: error.message });
    }
};

exports.getStockById = async (req, res) => {
    try {
        const response = await axios.get(`${API_DATA_URL}/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ message: 'Stock no encontrado', error: error.message });
    }
};

exports.createStock = async (req, res) => {
    try {
        const response = await axios.post(API_DATA_URL, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el stock', error: error.message });
    }
};

exports.updateStock = async (req, res) => {
    try {
        const response = await axios.put(`${API_DATA_URL}/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el stock', error: error.message });
    }
};

exports.deleteStock = async (req, res) => {
    try {
        await axios.delete(`${API_DATA_URL}/${req.params.id}`);
        res.status(204).json();
    } catch (error) {
        res.status(404).json({ message: 'Stock no encontrado', error: error.message });
    }
};