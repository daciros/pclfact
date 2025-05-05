const axios = require('axios');

const API_DATA_URL = 'http://localhost:3090/api/permissions';

// Obtener todos los permisos
exports.getAllPermissions = async (req, res) => {
    try {
        const response = await axios.get(API_DATA_URL);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo permiso
exports.createPermission = async (req, res) => {
    try {
        const response = await axios.post(API_DATA_URL, req.body);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener un permiso por ID
exports.getPermissionById = async (req, res) => {
    try {
        const response = await axios.get(`${API_DATA_URL}/${req.params.id}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Actualizar un permiso por ID
exports.updatePermission = async (req, res) => {
    try {
        const response = await axios.put(`${API_DATA_URL}/${req.params.id}`, req.body);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un permiso por ID
exports.deletePermission = async (req, res) => {
    try {
        await axios.delete(`${API_DATA_URL}/${req.params.id}`);
        res.status(204).json();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};