// const multer = require('multer');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mainRouter = require('./routes/index');

require('dotenv').config();
const { NODE_ENV } = process.env;

const app = express();

app.use(cors({}));
// app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// const upload = multer({ dest: 'uploads/' });
// app.use(upload.any());

// app.use(
//   cors({
//     origin: 'http://localhost:3000', // Especifica el origen permitido
//     credentials: true, // Permite el envío de cookies y encabezados personalizados
//     methods: 'GET, POST, PUT, DELETE', // Especifica los métodos HTTP permitidos
//     allowedHeaders: 'Content-Type, Authorization', // Especifica los encabezados permitidos
//   })
// );

app.use(cookieParser());
app.use(morgan('dev'));

// Motor de plantillas EJS para renderizar la página
app.set('view engine', 'ejs');

app.use(mainRouter);

module.exports = app;
