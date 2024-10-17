const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  telefono: { type: String, required: true },
  direccion: {
    calle: String,
    ciudad: String,
    codigo_postal: String,
    pais: String
  },
  fecha_registro: { type: Date, default: Date.now },
  estado: { type: String, default: 'activo' }
});

module.exports = mongoose.model('Cliente', ClienteSchema);
