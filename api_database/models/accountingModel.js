// models/accountingModel.js

const mongoose = require('mongoose');

const accountingSchema = new mongoose.Schema({
  transactionId: { type: String, required: true, unique: true },
  type: { type: String, enum: ['Invoice', 'Payment', 'Refund'], required: true },
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  description: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Accounting', accountingSchema);
