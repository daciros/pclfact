const accountingService = require('../services/accountingService');

// Create a new accounting
exports.createAccounting = async (req, res) => {
    try {
        const accounting = await accountingService.createAccounting(req.body);
        res.status(201).json(accounting);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all accountings
exports.getAllAccountings = async (req, res) => {
    try {
        const accountings = await accountingService.getAllAccountings();
        res.status(200).json(accountings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get accounting by ID
exports.getAccountingById = async (req, res) => {
    try {
        const accounting = await accountingService.getAccountingById(req.params.id);
        if (!accounting) {
            return res.status(404).json({ message: 'Accounting not found' });
        }
        res.status(200).json(accounting);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an accounting by ID
exports.updateAccounting = async (req, res) => {
    try {
        const accounting = await accountingService.updateAccounting(req.params.id, req.body);
        if (!accounting) {
            return res.status(404).json({ message: 'Accounting not found' });
        }
        res.status(200).json(accounting);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an accounting by ID
exports.deleteAccounting = async (req, res) => {
    try {
        const accounting = await accountingService.deleteAccounting(req.params.id);
        if (!accounting) {
            return res.status(404).json({ message: 'Accounting not found' });
        }
        res.status(200).json({ message: 'Accounting deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
