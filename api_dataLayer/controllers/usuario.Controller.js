const axios = require('axios');

const API_DATA_URL = 'http://localhost:3090/api/users';

exports.getAllUsers = async (req, res) => {
    try {
        const response = await axios.get(API_DATA_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const response = await axios.post(API_DATA_URL, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el usuario', error: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const response = await axios.get(`${API_DATA_URL}/${req.params.id}`);
        if (response.status === 200) {
            res.json(response.data);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(404).json({ message: 'Usuario no encontrado', error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const response = await axios.put(`${API_DATA_URL}/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el usuario', error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const response = await axios.delete(`${API_DATA_URL}/${req.params.id}`);
          if(response.status===200)
           res.json({ message: 'Usuario eliminado correctamente' });
          else
            res.status(404).json({ message: 'Usuario no encontrado'});
    } catch (error) {
        res.status(404).json({ message: 'Error al eliminar el usuario', error: error.message });
    }
};