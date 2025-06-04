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
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{
      bearerAuth: []
    }],
  },
  // Rutas a tus archivos de JSDoc para Swagger
  apis: ['./routes/*.js'], // Ajusta la ruta según tu estructura de archivos
};

const specs = swaggerJsdoc(swaggerOptions);

module.exports = (app) => {
  // Configuración de la ruta para servir la documentación
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};


/*const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentación de la API',
    },
    servers: [
      { url: 'http://localhost:3090', description: 'Servidor local' },
    ],
  },
  apis: ['./routes/*.js'], // Asegúrate de que esta ruta sea correcta
};

/*const specs = swaggerJsdoc(swaggerOptions);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)); // Usa `specs` en lugar de `swaggerDocument`
};*/