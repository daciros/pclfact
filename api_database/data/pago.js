const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PagoSchema = new Schema({
  factura: { type: Schema.Types.ObjectId, ref: 'Factura', required: true },
  fecha_pago: { type: Date, default: Date.now },
  monto: { type: Number, required: true },
  metodo_pago: { type: String, required: true },
  estado: { type: String, default: 'completado' }
});

module.exports = mongoose.model('Pago', PagoSchema);
