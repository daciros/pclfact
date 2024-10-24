const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client.Controller');

// CRUD operations
router.get('/', clientController.getAllClients);
router.post('/', clientController.createClient);
router.put('/', clientController.updateClient);
router.delete('/', clientController.deleteClient);
router.get('/', clientController.getClientById);
// Agrega otras rutas como PUT y DELETE según sea necesario

module.exports = router;
