const express = require("express");
const colors = require("colors");

// Definir una constante de aplicación que llame a la función express
const app = express();
const port = 3000;
const routerApi = require("./routes/main.controller");

app.use(express.json());

// El listen lleva dos parámetros, un puerto y un callback(función flecha)
app.listen(port, () => {
  console.log("Servidor express listening...".rainbow);
});

routerApi(app);
