// models/supplierModel.js

const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactPerson: { type: String },
  phone: { type: String },
  email: { type: String },
  address: { type: String }
});

module.exports = mongoose.model('Supplier', supplierSchema);
