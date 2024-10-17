const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FacturaSchema = new Schema({
  pedido: { type: Schema.Types.ObjectId, ref: 'Pedido', required: true },
  fecha_factura: { type: Date, default: Date.now },
  total: { type: Number, required: true },
  metodo_pago: { type: String, required: true },
  estado_pago: { type: String, default: 'pendiente' }
});

module.exports = mongoose.model('Factura', FacturaSchema);
