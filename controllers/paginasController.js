import { Viaje } from '../models/Viaje.js';
import { Testimonios } from '../models/testimoniales.js';

const paginaDeInicio = async (req, res) => {

const promiseDB=[]
promiseDB.push(Viaje.findAll({limit:3}))
promiseDB.push(Testimonios.findAll({limit:3}))

  try {
   const allResult = await Promise.all(promiseDB)
    res.render('inicio', {
      pagina: 'inicio',
      clase:'home',
      resultado:allResult[0],
      testimoniales:allResult[1],
    });
    
  } catch (error) {
    console.log(error);
  }
};
const paginaDeNosotros = (req, res) => {
  res.render('nosotros', {
    pagina: 'nosotros',
  });
};
const paginaDeViajes = async (req, res) => {
  //Consultamos la base datos

  const viajes = await Viaje.findAll();

  res.render('viajes', {
    pagina: 'proximos viajes',
    resultado: viajes,
  });
};
const paginaDeTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimonios.findAll();
    res.render('testimoniales', {
      pagina: 'testimoniales',
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};

//Paginas de detalles

const paginaDeDetalles = async (req, res) => {
  const { slug } = req.params;
  try {
    const resultado = await Viaje.findOne({ where: { slug } });

    res.render('viaje', {
      pagina: 'Informaciones del viaje',
      resultado,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaDeInicio,
  paginaDeNosotros,
  paginaDeViajes,
  paginaDeTestimoniales,
  paginaDeDetalles,
};
