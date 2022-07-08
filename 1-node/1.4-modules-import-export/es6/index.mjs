// const operations = require("./modules/sum-substract");
// const operations = require("./modules/multiply-divide");

import { sum, substract } from "./modules/sum-substract.js";
import * as operations from "./modules/multiply-divide.js";

function main() {
  let numero1 = 10;
  let numero2 = 40;

  const resultSum = sum(numero1, numero2);
  const resultSubs = substract(numero1, numero2);
  const resultMult = operations.multiply(numero1, numero2);
  const resultDiv = operations.divide(numero1, numero2);

  console.log("Suma: ", resultSum);
  console.log("Resta: ", resultSubs);
  console.log("Multiplicación: ", resultMult);
  console.log("Division: ", resultDiv);
}

main();
