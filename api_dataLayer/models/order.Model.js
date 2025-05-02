// models/order.Model.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'ClientDataLayer', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductDataLayer', required: true },
    quantity: { type: Number, required: true },
    unitPrice: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], default: 'Pending' }
});

module.exports = mongoose.model('OrderDataLayer', orderSchema);