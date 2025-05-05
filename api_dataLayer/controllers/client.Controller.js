const axios = require('axios');

// URL base de la API de la base de datos para clientes
const API_DATA_URL = 'http://localhost:3090/api/clients';

// Controlador para obtener todos los clientes
exports.getClients = async (req, res) => {
    try {
        // Realiza una solicitud GET a la API de la base de datos para obtener todos los clientes
        const response = await axios.get(API_DATA_URL);
        // Envía la respuesta con los datos de los clientes obtenidos
        res.json(response.data);
    } catch (error) {
        // Si ocurre un error, responde con un código de estado 500 y un mensaje de error
        res.status(500).json({ message: 'Error al obtener los clientes' });
    }
};

// Controlador para crear un nuevo cliente
exports.createClient = async (req, res) => {
    try {
        // Realiza una solicitud POST a la API de la base de datos para crear un nuevo cliente
        const response = await axios.post(API_DATA_URL, req.body);
        // Envía una respuesta exitosa con el cliente creado y un código de estado 201 (Creado)
        res.status(201).json(response.data);
    } catch (error) {
        // Si ocurre un error, responde con un código de estado 400 (Solicitud incorrecta) y un mensaje de error
        res.status(400).json({ message: 'Error al crear el cliente' });
    }
};

// Controlador para obtener un cliente por ID
exports.getClientById = async (req, res) => {
    try {
        // Realiza una solicitud GET a la API de la base de datos para obtener un cliente por ID
        const response = await axios.get(`${API_DATA_URL}/${req.params.id}`);
        // Envía la respuesta con los datos del cliente obtenido
        res.json(response.data);
    } catch (error) {
        // Si ocurre un error, responde con un código de estado 404 (No encontrado) y un mensaje de error
        res.status(404).json({ message: 'Cliente no encontrado' });
    }
};

// Controlador para actualizar un cliente
exports.updateClient = async (req, res) => {
    try {
        // Realiza una solicitud PUT a la API de la base de datos para actualizar un cliente
        const response = await axios.put(`${API_DATA_URL}/${req.params.id}`, req.body);
        // Envía la respuesta con los datos del cliente actualizado
        res.json(response.data);
    } catch (error) {
        // Si ocurre un error, responde con un código de estado 400 (Solicitud incorrecta) y un mensaje de error
        res.status(400).json({ message: 'Error al actualizar el cliente' });
    }
};

// Controlador para eliminar un cliente
exports.deleteClient = async (req, res) => {
    try {
        // Realiza una solicitud DELETE a la API de la base de datos para eliminar un cliente
        await axios.delete(`${API_DATA_URL}/${req.params.id}`);
        // Envía una respuesta exitosa con un código de estado 204 (Sin contenido)
        res.status(204).json();
    } catch (error) {
        // Si ocurre un error, responde con un código de estado 404 (No encontrado) y un mensaje de error
        res.status(404).json({ message: 'Error al eliminar el cliente' });
    }
};