const fs = require("fs");

const fileName = "./1-node/1.2-crear-archivo/my-file.txt";
const textContent = "Este texto lo escribí desde node";

fs.writeFile(fileName, textContent, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("¡Archivo creado con éxito!");
  }
});
