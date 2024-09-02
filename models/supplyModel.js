// models/supplyModel.js

const mongoose = require('mongoose');

const supplySchema = new mongoose.Schema({
  supplyCode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  purchaseDate: { type: Date, required: true }
});

module.exports = mongoose.model('Supply', supplySchema);
