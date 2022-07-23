require('dotenv').config();
const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./docs/swagger.config');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const swaggerDocs = swaggerJSDoc(swaggerConfig);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.EXPRESS_PORT, () => console.log('ouvindo porta', process.env.EXPRESS_PORT));
