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

// this.exports.sum = sum;
// exports.sum = sum;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;

module.exports = {
  sum,
  substract,
  multiply,
  divideNumbers: divide,
};
