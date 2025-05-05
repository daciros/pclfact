const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const { authorize } = require('../middleware/authorize');

router.get('/', authorize, clientController.getClients);
router.get('/:id', authorize, clientController.getClientById);
router.post('/', authorize, clientController.createClient);
router.put('/:id', authorize, clientController.updateClient);
router.delete('/:id', authorize, clientController.deleteClient);

module.exports = router;