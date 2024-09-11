const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

// Definir las rutas para proveedores
router.get('/', supplierController.getSuppliers);
router.get('/:id', supplierController.getSupplierById);
router.post('/', supplierController.createSupplier);
router.put('/:id', supplierController.updateSupplier);
router.delete('/:id', supplierController.deleteSupplier);

module.exports = router;
