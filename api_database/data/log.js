const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
  accion: { type: String, required: true },
  descripcion: { type: String },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', LogSchema);
