const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Definir las rutas para clientes
router.get('/', clientController.getClients);
router.get('/:id', clientController.getClientById);
router.post('/', clientController.createClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;
