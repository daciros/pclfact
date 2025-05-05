// api_database/services/accountingService.js
const Accounting = require('../models/accountingModel');

const getAllAccountings = async () => {
  try {
    return await Accounting.find({});
  } catch (error) {
    console.error('Error getting all accountings:', error);
    throw new Error('Error getting all accountings');
  }
};

const getAccountingById = async (id) => {
  try {
    const accounting = await Accounting.findById(id);
    if (!accounting) {
      throw new Error('Accounting not found');
    }
    return accounting;
  } catch (error) {
    console.error('Error getting accounting by ID:', error);
    throw new Error('Error getting accounting by ID');
  }
};

const createAccounting = async (accountingData) => {
  try {
    const newAccounting = new Accounting(accountingData);
    return await newAccounting.save();
  } catch (error) {
    console.error('Error creating accounting:', error);
    throw new Error('Error creating accounting');
  }
};

const updateAccounting = async (id, accountingData) => {
  try {
    const updatedAccounting = await Accounting.findByIdAndUpdate(id, accountingData, { new: true });
    if (!updatedAccounting) {
      throw new Error('Accounting not found');
    }
    return updatedAccounting;
  } catch (error) {
    console.error('Error updating accounting:', error);
    throw new Error('Error updating accounting');
  }
};

const deleteAccounting = async (id) => {
    /*try {
        return await Accounting.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Error al eliminar la cuenta contable');*/
    try {
        const deletedAccounting = await Accounting.findByIdAndDelete(id);
        if (!deletedAccounting) {
            throw new Error('Accounting not found');
        }
        return deletedAccounting
    } catch (error) {
        console.error('Error deleting accounting:', error);
        throw new Error('Error deleting accounting');
    }
  
};

module.exports = { getAllAccountings, getAccountingById, createAccounting, updateAccounting, deleteAccounting };