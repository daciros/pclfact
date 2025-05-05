const axios = require('axios');

const API_DATABASE_URL = 'http://localhost:3090/api/supplies';

exports.getAllSupplies = async (req, res) => {
    try {
        const response = await axios.get(API_DATABASE_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching supplies', error: error.message });
    }
};

exports.getSupplyById = async (req, res) => {
    try {
        const response = await axios.get(`${API_DATABASE_URL}/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ message: 'Supply not found', error: error.message });
    }
};

exports.createSupply = async (req, res) => {
    try {
        const response = await axios.post(API_DATABASE_URL, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(400).json({ message: 'Error creating supply', error: error.message });
    }
};

exports.updateSupply = async (req, res) => {
    try {
        const response = await axios.put(`${API_DATABASE_URL}/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ message: 'Error updating supply', error: error.message });
    }
};

exports.deleteSupply = async (req, res) => {
    try {
        await axios.delete(`${API_DATABASE_URL}/${req.params.id}`);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: 'Supply not found or error deleting', error: error.message });
    }
};