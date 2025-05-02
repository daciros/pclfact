// models/product.Model.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productCode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  unitPrice: { type: Number, required: true },
  stock: { type: Number, required: true },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'SupplierDataLayer' }
});

module.exports = mongoose.model('ProductDataLayer', productSchema);