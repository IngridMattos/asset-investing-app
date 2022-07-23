const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Express API com Swagger',
      description: 'Express API documentada com swagger',
      version: '1.0',
      contact: {
        email: 'ingrid_matt@hotmail.com',
      },
    },
    servers: [{
      url: 'http://localhost:3001',
      description: 'servido local',
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/routes.js'],
};
module.exports = swaggerConfig;
