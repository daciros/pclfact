const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');
const {authorize} = require('../middleware/authorize');
//const {auth} = require('../middleware/authorize')

router.get('/', authorize, supplierController.getAllSuppliers);
router.get('/:id', authorize, supplierController.getSupplierById);
router.post('/', authorize, supplierController.createSupplier);
router.put('/:id', authorize, supplierController.updateSupplier);
router.delete('/:id', authorize, supplierController.deleteSupplier);

module.exports = router;