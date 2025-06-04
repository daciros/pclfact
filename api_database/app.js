// app.js
const config = require('./config/config');
const express = require('express');
const {authorize} = require('./middleware/authorize');
const routes = require('./routes/index.Routes');

const swaggerConfig = require('./config/swagger');
const mongoose = require('mongoose');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3090;

// Middleware CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(cors());
app.use(bodyParser.json());
// Conectar a MongoDB
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB conectado con Exito'))
  .catch((err) => console.log('Error de conexión', err));

// Configura Swagger UI en la ruta /api-docs
swaggerConfig(app);
app.use(authorize);
app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});