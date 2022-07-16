const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

// app.use(routes);
app.listen(process.env.EXPRESS_PORT, () => console.log('ouvindo porta', process.env.EXPRESS_PORT));
