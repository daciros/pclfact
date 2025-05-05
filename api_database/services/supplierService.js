// api_database/services/supplierService.js
const Supplier = require("../models/supplierModel");

const getAllSuppliers = async () => {
  try {
    return await Supplier.find({});
  } catch (error) {
    console.error("Error getting all suppliers:", error);
    throw new Error("Error getting all suppliers");
  }
};

const getSupplierById = async (id) => {
  try {
    const supplier = await Supplier.findById(id);
    if (!supplier) {
      throw new Error("Supplier not found");
    }
    return supplier;
  } catch (error) {
    console.error("Error getting supplier by ID:", error);
    throw new Error("Error getting supplier by ID");
  }
};

const createSupplier = async (supplierData) => {
  try {
    const newSupplier = new Supplier(supplierData);
    return await newSupplier.save();
  } catch (error) {
    console.error("Error creating supplier:", error);
    throw new Error("Error creating supplier");
  }
};

const updateSupplier = async (id, supplierData) => {
  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(id, supplierData, {
      new: true,
    });
    if (!updatedSupplier) {
      throw new Error("Supplier not found");
    }
    return updatedSupplier;
  } catch (error) {
    console.error("Error updating supplier:", error);
    throw new Error("Error updating supplier");
  }
};

const deleteSupplier = async (id) => {
    try {
        return await Supplier.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Error al eliminar el proveedor');
    }
};
module.exports = { getAllSuppliers, getSupplierById, createSupplier, updateSupplier, deleteSupplier };