// models/clientModel.js

const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  clientId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  contactPerson: { type: String },
  phone: { type: String },
  email: { type: String },
  address: { type: String },
  registrationDate: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Client', clientSchema);
