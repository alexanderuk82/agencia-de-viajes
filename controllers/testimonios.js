import { Testimonios } from '../models/testimoniales.js';

const guardarTestimonio = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === '') {
    errores.push({ mensaje: 'Nombre esta vacio' });
  }
  if (correo.trim() === '') {
    errores.push({ mensaje: 'Correo esta vacio' });
  }
  if (mensaje.trim() === '') {
    errores.push({ mensaje: 'Mensaje esta vacio' });
  }

  if (errores.length > 0) {
    //!Consultar los testimonios
    const testimoniales = await Testimonios.findAll();

    res.render('testimoniales', {
      pagina: 'Testimoniales',
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales
    });
  } else {
    //Lo almacenamos en la base de datos

    try {
      await Testimonios.create({ nombre, correo, mensaje });
    } catch (error) {
      console.log(error);
    }

    res.redirect('/testimoniales');
  }
};

export { guardarTestimonio };
