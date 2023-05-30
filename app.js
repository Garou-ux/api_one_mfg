
require('dotenv').config();
require('./config/db');
const express  = require('express');
const user_routes =  require('./Routes/Catalogos/Users/UserRoute');
const PayRollRoute = require('./Routes/PayRoll/PayRollRoute');

const app = express();

app.use(express.json());


app.use('/api', user_routes); //middleware para que antes de cada ruta se añada el path /api
app.use('/api', PayRollRoute);

module.exports = app;   