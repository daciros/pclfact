// models/invoice.Model.js

const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'ClientDataLayer', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductDataLayer', required: true },
    quantity: { type: Number, required: true },
    unitPrice: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['Paid', 'Unpaid', 'Overdue'], default: 'Unpaid' }
});

module.exports = mongoose.model('InvoiceDataLayer', invoiceSchema);