// controllers/supplierController.js

const supplierService = require('../services/supplierService');

// Crear un nuevo proveedor
exports.createSupplier = async (req, res) => {
    try {
        const supplier = await supplierService.createSupplier(req.body);
        res.status(201).json(supplier);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los proveedores
exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await supplierService.getAllSuppliers();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un proveedor por id
exports.getSupplierById = async (req, res) => {
    try {
        const supplier = await supplierService.getSupplierById(req.params.id);
        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un proveedor por ID
exports.updateSupplier = async (req, res) => {
    try {
        const supplier = await supplierService.updateSupplier(req.params.id, req.body);
        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un proveedor por ID
exports.deleteSupplier = async (req, res) => {
    try {
        const supplier = await supplierService.deleteSupplier(req.params.id);
        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }
        res.status(200).json({ message: 'Supplier deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
