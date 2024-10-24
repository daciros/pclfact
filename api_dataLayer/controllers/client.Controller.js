const axios = require('axios');

// URL de tu API de datos
const API_DATA_URL = 'http://localhost:3090/api/clients/';

exports.getAllClients = async (req, res) => {
    try {
        const response = await axios.get(API_DATA_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createClient = async (req, res) => {
    try {
        const response = await axios.post(API_DATA_URL, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getClientById = async (req, res) => {
    try {
        const response = await axios.get(`${API_DATA_URL}/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ message: 'Cliente no encontrado' });
    }
}

exports.updateClient = async (req, res) => {
    try {
        const response = await axios.put(`${API_DATA_URL}/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.deleteClient = async (req, res) => {
    try {
        await axios.delete(`${API_DATA_URL}/${req.params.id}`);
        res.status(204).json();
    } catch (error) {
        res.status(404).json({ message: 'Cliente no encontrado' });
    }
}