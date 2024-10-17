const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  categoria: { type: Schema.Types.ObjectId, ref: 'Categoria', required: true }
});

module.exports = mongoose.model('Producto', ProductoSchema);
