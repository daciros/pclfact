const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String }
});

module.exports = mongoose.model('Category', CategorySchema);
