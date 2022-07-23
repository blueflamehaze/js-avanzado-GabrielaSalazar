const express = require("express");

// Crear objeto router
const shoesRouter = express.Router();

let shoes = [
  { id: 1, brand: "Noke", price: 200, size: 29 },
  { id: 2, brand: "Edidas", price: 500, size: 22 },
  { id: 3, brand: "Floxi", price: 900, size: 25 },
];

// Query params: Filtrar información
// https:localhost:3000/shoes/?page=1&pageSize=10&brand="noke"
// %20 => Espacio en blanco
// %22 => Comillas dobles
shoesRouter.get("/shoes", (req, res) => {
  const { page, pageSize, brand } = req.query;

  if (page && pageSize && brand) {
    res.json({ page, pageSize, brand });
  }
  // En lugar de res.send vamos a usar un res.json para regresarlo en formato json
  res.json(shoes);
});

// Vamos a filtrar el endpoint por id, pero necesitamos recibir los parametros que vienen de la URL
// Request param: Son utilizados para ejecutar operaciones sobre un elemento en específico
shoesRouter.get("/shoes/:id", (req, res) => {
  // Adentro del request están los params y ahí está el id
  const { id } = req.params;
  const shoe = { id: 1, brand: "Noke", price: 200, size: 29, searching: id };
  // En lugar de res.send vamos a usar un res.json para regresarlo en formato json
  res.json(shoe);
});

// Usar post para crear
// http:localhost:3000/shoes
//{id:4, brand: "pima", price: 600, size: 26}
shoesRouter.post("/shoes", (req, res) => {
  // El body es lo que le vamos a pasar al endpoint para que funcione
  const newShoe = req.body;
  shoes.push(newShoe);
  console.log(shoes);
  const response = { message: "Shoe created" };
  res.status(201).json(response);
});

// PARTIAL EDITION: PATCH
shoesRouter.patch("/shoes/:id", (req, res) => {
  // Recupero el body
  const body = req.body;
  // Recupero el id de los params
  const { id } = req.params;
  // Me ayudó de la función find Index para identificar si el id existe y me regresa la posición
  const indexFounded = shoes.findIndex((shoe) => shoe.id === parseInt(id));
  if (indexFounded !== -1) {
    // Guardo el objeto de shoe
    const shoeCopy = { ...shoes[indexFounded] };
    shoes[indexFounded] = { ...shoeCopy, ...body };
    res.json({ message: "Modified with success", body });
    console.log(shoes);
  } else {
    res.send("Ese id no existe");
  }
});

// COMPLETE EDITION: PUT
shoesRouter.put("/shoes/:id", (req, res) => {
  // Recupero el body
  const body = req.body;
  // Recupero el id de los params
  const { id } = req.params;
  // Me ayudó de la función find Index para identificar si el id existe y me regresa la posición
  const indexFounded = shoes.findIndex((shoe) => shoe.id === parseInt(id));
  if (indexFounded !== -1) {
    // Guardo el objeto de shoe
    const shoeCopy = { ...shoes[indexFounded] };
    shoes[indexFounded] = { ...shoeCopy, ...body };
    console.log(shoes);
    res.json({ message: "Modified with success", body });
  } else {
    res.send("Ese id no existe");
  }
});

shoesRouter.delete("/shoes/:id", (req, res) => {
  const { id } = req.params;
  const indexFounded = shoes.findIndex((shoe) => shoe.id === parseInt(id));
  if (indexFounded !== -1) {
    const shoesCopy = [...shoes];
    shoesCopy.splice(indexFounded, 1);
    shoes = [...shoesCopy];
    console.log("shoes: ", shoes);
    res.json({ message: "Deleted with success", id });
  } else {
    res.send("Ese id no existe");
  }
});

// El router se tiene que exportar
module.exports = shoesRouter;
