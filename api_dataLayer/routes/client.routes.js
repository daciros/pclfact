const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client.Controller');

// CRUD operations
router.get('/', clientController.getClients);
router.get('/:id', clientController.getClientById);
router.post('/', clientController.createClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);
// Agrega otras rutas como PUT y DELETE según sea necesario

module.exports = router;
