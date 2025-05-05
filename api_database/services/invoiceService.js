// api_database/services/invoiceService.js
const Invoice = require('../models/invoiceModel');

const getAllInvoices = async () => {
  try {
    return await Invoice.find({});
  } catch (error) {
    console.error('Error getting all invoices:', error);
    throw new Error('Error getting invoices');
  }
};

const getInvoiceById = async (id) => {
  try {
    const invoice = await Invoice.findById(id);
    if (!invoice) {
      throw new Error('Invoice not found');
    }
    return invoice;
  } catch (error) {
    console.error(`Error getting invoice by ID ${id}:`, error);
    throw new Error('Error getting invoice by ID');
  }
};

const createInvoice = async (invoiceData) => {
  try {
    const newInvoice = new Invoice(invoiceData);
    return await newInvoice.save();
  } catch (error) {
    console.error('Error creating invoice:', error);
    throw new Error('Error creating invoice');
  }
};

const updateInvoice = async (id, invoiceData) => {
  try {
    const updatedInvoice = await Invoice.findByIdAndUpdate(id, invoiceData, { new: true });
      if(!updatedInvoice) throw new Error('Invoice not found')
    return updatedInvoice;
  } catch (error) {
    console.error(`Error updating invoice with ID ${id}:`, error);
    throw new Error('Error updating invoice');
  }
};

const deleteInvoice = async (id) => {
  try {
    return await Invoice.findByIdAndDelete(id);
  } catch (error) {
    console.error(`Error deleting invoice with ID ${id}:`, error);
    throw new Error('Error deleting invoice');
  }
};

module.exports = {
    getAllInvoices,
    getInvoiceById,
    createInvoice,
    updateInvoice,
    deleteInvoice,
};