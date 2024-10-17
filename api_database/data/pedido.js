const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PedidoSchema = new Schema({
  cliente: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
  fecha_pedido: { type: Date, default: Date.now },
  estado: { type: String, default: 'pendiente' },
  productos: [
    {
      producto: { type: Schema.Types.ObjectId, ref: 'Producto', required: true },
      cantidad: { type: Number, required: true },
      precio: { type: Number, required: true }
    }
  ],
  total: { type: Number, required: true }
});

module.exports = mongoose.model('Pedido', PedidoSchema);
