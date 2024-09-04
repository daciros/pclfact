const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nombre_usuario: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  rol: { type: String, required: true },
  ultima_conexion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
