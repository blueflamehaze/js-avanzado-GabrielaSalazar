function sum(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

// Nombre izquierdo es como se va a llamar en el objeto global de node
// Nombre derecho es lo que le voy a pasar
exports.sum = sum;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
