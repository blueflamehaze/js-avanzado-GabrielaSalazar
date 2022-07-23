const express = require("express");

// Crear objeto router
const dummyRouter = express.Router();

// Para hacer funcionar en el endpoint raíz
dummyRouter.get("/hola", (req, res) => {
  // La respuesta se regresa con el método send y adentro del parentésis se pone lo que queremos regresar
  res.send("Hola mundo!");
});

// El router se tiene que exportar
module.exports = dummyRouter;
