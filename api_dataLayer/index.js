const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const clientRoutes = require('./routes/client.routes'); // Ruta para clientes

const app = express();
const PORT = process.env.PORT || 3050;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/clients', clientRoutes);

app.listen(PORT, () => {
    console.log(`Data Layer API running on port ${PORT}`);
});