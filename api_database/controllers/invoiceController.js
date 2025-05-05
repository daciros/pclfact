// controllers/invoiceController.js

const invoiceService = require('../services/invoiceService');

// Crear una nueva factura
exports.createInvoice = async (req, res) => {
    try {
        const invoice = await invoiceService.createInvoice(req.body);
        res.status(201).json(invoice);
    } catch (error) {
        console.error("Error creating invoice:", error);
        res.status(400).json({ error: error.message });
    }
};

// get all the invoices
exports.getInvoices = async (req, res) => {
    try {
        const invoices = await invoiceService.getAllInvoices();
        res.status(200).json(invoices);
    } catch (error) {
        console.error("Error getting all invoices:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Obtener una factura por ID
exports.getInvoiceById = async (req, res) => {
    try {
        const invoice = await invoiceService.getInvoiceById(req.params.id);
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        res.status(200).json(invoice);
    } catch (error) {
        console.error(`Error getting invoice with ID ${req.params.id}:`, error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Actualizar una factura por ID
exports.updateInvoice = async (req, res) => {
    try {
        const invoice = await invoiceService.updateInvoice(req.params.id, req.body);
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        res.status(200).json(invoice);
    } catch (error) {
        console.error(`Error updating invoice with ID ${req.params.id}:`, error);
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una factura por ID
exports.deleteInvoice = async (req, res) => {
    try {
        const invoice = await invoiceService.deleteInvoice(req.params.id);
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        res.status(200).json({ message: 'Invoice deleted successfully' });
    } catch (error) {
        console.error(`Error deleting invoice with ID ${req.params.id}:`, error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
