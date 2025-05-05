// api_database/services/supplyService.js
const Supply = require('../models/supplyModel');

const getAllSupplies = async () => {
  try {
    return await Supply.find({});
  } catch (error) {
    console.error('Error getting supplies:', error);
    throw new Error('Error retrieving supplies');
  }
};

const getSupplyById = async (id) => {
  try {
    const supply = await Supply.findById(id);
    if (!supply) {
      throw new Error('Supply not found');
    }
    return supply;
  } catch (error) {
    console.error('Error getting supply by ID:', error);
    throw new Error('Error retrieving supply by ID');
  }
};

const createSupply = async (supplyData) => {
  try {
    const newSupply = new Supply(supplyData);
    return await newSupply.save();
  } catch (error) {
    console.error('Error creating supply:', error);
    throw new Error('Error creating supply');
  }
};

const updateSupply = async (id, supplyData) => {
  try {
    const updatedSupply = await Supply.findByIdAndUpdate(id, supplyData, { new: true });
    if (!updatedSupply) {
      throw new Error('Supply not found for update');
    }
    return updatedSupply;
  } catch (error) {
    console.error('Error updating supply:', error);
    throw new Error('Error updating supply');
  }
};

const deleteSupply = async (id) => {
    try {
        return await Supply.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Error al eliminar el suministro');
    }
};

module.exports = { 
  getAllSupplies,
  getSupplyById,
  createSupply,
  updateSupply,
  deleteSupply,
};
