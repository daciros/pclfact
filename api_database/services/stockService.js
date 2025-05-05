// api_database/services/stockService.js
const Stock = require('../models/stockModel');

const getAllStocks = async () => {
  try {
    return await Stock.find({});
  } catch (error) {
    console.error('Error getting all stocks:', error);
    throw new Error('Failed to retrieve stocks.');
  }
};

const getStockById = async (id) => {
  try {
    const stock = await Stock.findById(id);
    if (!stock) {
      throw new Error('Stock not found.');
    }
    return stock;
  } catch (error) {
    console.error(`Error getting stock by ID ${id}:`, error);
    throw new Error('Failed to retrieve stock.');
  }
};

const createStock = async (stockData) => {
  try {
    const newStock = new Stock(stockData);
    return await newStock.save();
  } catch (error) {
    console.error('Error creating stock:', error);
    throw new Error('Failed to create stock.');
  }
};

const updateStock = async (id, stockData) => {
  try {
    const updatedStock = await Stock.findByIdAndUpdate(id, stockData, { new: true });
    if (!updatedStock) {
        throw new Error('Stock not found.');
      }
    return updatedStock;
  } catch (error) {
    console.error(`Error updating stock with ID ${id}:`, error);
    throw new Error('Failed to update stock.');
  }
};

const deleteStock = async (id) => {
    try {
        return await Stock.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Error deleting stock');
    }
};

module.exports = {    getAllStocks,
    getStockById,    
    createStock,    
    updateStock,    
    deleteStock,
};
