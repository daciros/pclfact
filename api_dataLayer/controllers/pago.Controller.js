// controllers/pago.Controller.js
const axios = require('axios');

// URL base de la API de la base de datos
const API_BASE_URL = 'http://localhost:3090/api/payments';

exports.getAllPayments = async (req, res) => {
    try {
        const response = await axios.get(API_BASE_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pagos', error: error.message });
    }
};

exports.createPayment = async (req, res) => {
    try {
        const response = await axios.post(API_BASE_URL, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el pago', error: error.message });
    }
};

exports.getPaymentById = async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${req.params.id}`);
        if (response.data) {
            res.json(response.data);
        } else {
            res.status(404).json({ message: 'Pago no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el pago', error: error.message });
    }
};

exports.updatePayment = async (req, res) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el pago', error: error.message });
    }
};

exports.deletePayment = async (req, res) => {
    try {
        await axios.delete(`${API_BASE_URL}/${req.params.id}`);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: 'Error al eliminar el pago o pago no encontrado', error: error.message });
    }
};