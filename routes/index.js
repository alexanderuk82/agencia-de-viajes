import express from 'express';
import {
  paginaDeInicio,
  paginaDeViajes,
  paginaDeNosotros,
  paginaDeTestimoniales,
  paginaDeDetalles
} from '../controllers/paginasController.js';
import { guardarTestimonio} from '../controllers/testimonios.js'

const router = express.Router();

//!Creamos nuestros archivos con el controller

router.get('/', paginaDeInicio);
router.get('/viajes', paginaDeViajes);
router.get('/viajes/:slug', paginaDeDetalles);
router.get('/nosotros', paginaDeNosotros);
router.get('/testimoniales', paginaDeTestimoniales);
router.post('/testimoniales', guardarTestimonio);

export default router;
