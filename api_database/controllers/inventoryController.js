// controllers/inventoryController.js

const inventoryService = require('../services/inventoryService');

// Crear un nuevo producto en el inventario
exports.createInventory = async (req, res) => {
  try {
    const inventory = await inventoryService.createInventory(req.body);
    res.status(201).json(inventory);
  } catch (error) {
    console.error('Error creating inventory:', error);
    res.status(500).json({ error: 'Failed to create inventory' });
  }
};

// Obtener todos los productos en el inventario
exports.getAllInventories = async (req, res) => {
  try {
    const allInventories = await inventoryService.getAllInventories();
    res.status(200).json(allInventories);
  } catch (error) {
    console.error('Error getting all inventories:', error);
    res.status(500).json({ error: 'Failed to retrieve inventories' });
  }
};

// Obtener un inventario por ID
exports.getInventoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const inventory = await inventoryService.getInventoryById(id);
    if (!inventory) {
      return res.status(404).json({ message: 'Inventory not found' });
    }
    res.status(200).json(inventory);
  } catch (error) {
    console.error(`Error getting inventory with ID ${id}:`, error);
    res.status(500).json({ error: 'Failed to retrieve inventory' });
  }
};

// Actualizar un inventario por ID
exports.updateInventory = async (req, res) => {
  const { id } = req.params;
  try {
    const inventory = await inventoryService.updateInventory(id, req.body);
    if (!inventory) {
      return res.status(404).json({ message: 'Inventory not found' });
    }
    res.status(200).json(inventory);
  } catch (error) {
    console.error(`Error updating inventory with ID ${id}:`, error);
    res.status(500).json({ error: 'Failed to update inventory' });
  }
};

// Eliminar un inventario por ID
exports.deleteInventory = async (req, res) => {
  try {
    await inventoryService.deleteInventory(req.params.id);    
    res.status(204).send(); 
  } catch (error) {
    console.error('Error deleting inventory:', error);
    res.status(500).json({ error: 'Failed to delete inventory' });
  }
};
