// api_database/services/inventoryService.js
const Inventory = require('../models/inventoryModel');

const getAllInventories = async () => {
  try {
    return await Inventory.find({});
  } catch (error) {
    console.error('Error getting inventories:', error);
    throw new Error('Error al obtener los inventarios');
  }
};

const getInventoryById = async (id) => {
  try {
    const inventory = await Inventory.findById(id);
    if (!inventory) {
      throw new Error('Inventario no encontrado');
    }
    return inventory;
  } catch (error) {
    console.error('Error getting inventory by ID:', error);
    throw new Error('Error al obtener el inventario por ID');
  }
};

const createInventory = async (inventoryData) => {
  try {
    const newInventory = new Inventory(inventoryData);
    return await newInventory.save();
  } catch (error) {
    console.error('Error creating inventory:', error);
    throw new Error('Error al crear el inventario');
  }
};

const updateInventory = async (id, inventoryData) => {
  try {
    return await Inventory.findByIdAndUpdate(id, inventoryData, { new: true });
  } catch (error) {
    console.error('Error updating inventory:', error);
    throw new Error('Error al actualizar el inventario');
  }
};

const deleteInventory = async (id) => {
    try {
        return await Inventory.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Error al eliminar el inventario');
        console.error('Error deleting inventory:', error);
    }
};

module.exports = {
  getAllInventories,
  getInventoryById,
  createInventory,
  updateInventory,
  deleteInventory,
};