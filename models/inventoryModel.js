// models/inventoryModel.js

const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  productCode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  unitPrice: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Inventory', inventorySchema);
