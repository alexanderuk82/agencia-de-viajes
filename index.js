import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv/config'

console.log(process.env.DB_HOST);

const app = express();

//!Conecta base de datos

db.authenticate()
  .then(() => console.log('Base de datos conectada'))
  .catch((err) => console.error(err));

//!Definimos el puerto

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});

//! Definimos la carpeta publica

app.use(express.static('public'));

//! Definimos el BodyParser para formularios

app.use(express.urlencoded({ extended: true }));

//! Definimos una fecha
app.use((req, res, next) => {
  const year = new Date().getFullYear();
  res.locals.currentYear = year;
  next();
});

//! Definimos el nombre del sitio

app.use((req, res, next) => {
  res.locals.siteName = 'Agencia de Viajes';
  next();
});

//! Agregamos router

app.use('/', router);

//! Agregamos pug

app.set('view engine', 'pug');
