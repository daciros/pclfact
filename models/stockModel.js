// models/stockModel.js

const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ['In', 'Out'], required: true },
  reference: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' } // Referencia a un pedido o factura si es necesario
});

module.exports = mongoose.model('Stock', stockSchema);
