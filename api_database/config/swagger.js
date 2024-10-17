// config/swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); 

// Opciones de Swagger JSDoc
const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // Especifica la versión de OpenAPI
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentación de API para mi aplicación',
    },
    servers: [
      {
        url: 'http://localhost:3090',
        description: 'Servidor local',
      },
    ],
  },
  // Rutas a tus archivos de JSDoc para Swagger
  apis: ['./routes/*.js'], // Ajusta la ruta según tu estructura de archivos
};

const specs = swaggerJsdoc(swaggerOptions);

module.exports = (app) => {
  // Configuración de la ruta para servir la documentación
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};