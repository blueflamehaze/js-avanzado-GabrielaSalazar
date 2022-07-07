const operations = require("./functions");
// import operations from "./functions"

function main() {
  let numero1 = 10;
  let numero2 = 40;
  console.log("Suma: ", operations.sum(numero1, numero2));
  console.log("Resta: ", operations.substract(numero1, numero2));
  console.log("Multiplicación: ", operations.multiply(numero1, numero2));
  console.log("División: ", operations.divide(numero1, numero2));
}

main();
