const stockService = require('../services/stockService');

// Create a new stock record
exports.createStock = async (req, res) => {
  try {
    const newStock = await stockService.createStock(req.body);
    res.status(201).json(newStock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all stock records
exports.getAllStocks = async (req, res) => {
  try {
    const stocks = await stockService.getAllStocks();
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving stock records", error: error.message });
  }
};

// Get a stock record by ID
exports.getStockById = async (req, res) => {
  try {
    const stock = await stockService.getStockById(req.params.id);
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving stock record", error: error.message });
  }
};

// Update a stock record by ID
exports.updateStock = async (req, res) => {
  try {
    const stock = await stockService.updateStock(req.params.id, req.body);
    if (!stock) return res.status(404).json({ message: 'Stock not found' });
    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ message: "Error updating stock record", error: error.message });
  }
};

// Delete a stock record by ID
exports.deleteStock = async (req, res) => {
  try {
    const stock = await stockService.deleteStock(req.params.id);
    if (!stock) return res.status(404).json({ message: 'Stock not found' });
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: "Error deleting stock record", error: error.message });
  }
};
