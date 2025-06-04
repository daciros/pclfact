const axios = require('axios');
const config = require('../config');

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3871826602.
const API_DATA_URL = '/api/accountings';


exports.getAllAccountings = async (req, res) => {
    try {
        const response = await axios.get(API_DATA_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las operaciones contables', error: error.message });
    }
};


exports.getAccountingById = async (req, res) => {
    try {
        const response = await axios.get(`${API_DATA_URL}/${req.params.id}`);
        if (!response.data) {
            return res.status(404).json({ message: 'Operación contable no encontrada' });
        }
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la operación contable', error: error.message });
    }
};


exports.createAccounting = async (req, res) => {
    try {
        const response = await axios.post(API_DATA_URL, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la operación contable', error: error.message });
    }
};


exports.updateAccounting = async (req, res) => {
    try {
        const response = await axios.put(`${API_DATA_URL}/${req.params.id}`, req.body);
        if (!response.data) {
            return res.status(404).json({ message: 'Operación contable no encontrada' });
        }
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la operación contable', error: error.message });
    }
};


exports.deleteAccounting = async (req, res) => {
    try {
        const response = await axios.delete(`${API_DATA_URL}/${req.params.id}`);
        if (response.status === 204) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Operación contable no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la operación contable', error: error.message });
    }
};
