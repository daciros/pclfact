const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.Routes');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const config = require('./config');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3050;
const API_DATABASE_URL = config.API_URL || 'http://localhost:3090';

// Middlewares
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
})); 
app.use('*', cors());
app.use(bodyParser.json());
app.use(express.json());

// 1. Generar un token para las solicitudes a la otra API
const generateAPIToken = () => {
    return jwt.sign(
        { 
            app: 'data-layer-api', // Identificador de tu API
            timestamp: new Date().getTime() 
        }, 
        config.SECRET_KEY,
        { expiresIn: '1h' } // Token válido por 1 hora
    );
};

// 2. Interceptor de Axios para agregar el token automáticamente
axios.interceptors.request.use((request) => {
    if (request.url.startsWith(API_DATABASE_URL)) {
        const token = generateAPIToken();
        request.headers['Authorization'] = `Bearer ${token}`;
        console.log(request.url);

    }
    return request;
});

// Ruta de ejemplo que usa Axios para llamar a la otra API
app.use(routes);

// Iniciar servidor
app.listen(PORT, () => {
    const token = generateAPIToken();
    console.log(`Data Layer API running on port ${PORT}`);
    console.log(`Token Secret: ${token}`);
});