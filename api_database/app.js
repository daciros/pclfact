const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

// Conectar a MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

app.use(bodyParser.json());

// Rutas
const clientesRouter = require('./routes/clientes');
// Agregar las demás rutas
const productosRouter = require('./routes/productos');
const pedidosRouter = require('./routes/pedidos');
const facturasRouter = require('./routes/facturas');
const pagosRouter = require('./routes/pagos');
const usuariosRouter = require('./routes/usuarios');
const categoriasRouter = require('./routes/categorias');
const logsRouter = require('./routes/logs');

app.use('/api/clientes', clientesRouter);
// Agregar las demás rutas
app.use('/api/productos', productosRouter);
app.use('/api/pedidos', pedidosRouter);
app.use('/api/facturas', facturasRouter);
app.use('/api/pagos', pagosRouter);
app.use('/api/usuarios', usuariosRouter);
app.use('/api/categorias', categoriasRouter);
app.use('/api/logs', logsRouter);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
