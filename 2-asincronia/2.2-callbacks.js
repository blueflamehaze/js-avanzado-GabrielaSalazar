/**
 * BLOQUE 3: Solución 1 - Uso de callbacks (no es la buena practica debido
 * a que el anidamiento se puede extender sin fin - callbackhell)
 */
console.log("============== BLOQUE 3 ==============");
// Pasas la función del código que quieres ejecutar después como parámetro de la
// función en la que se está presentando la asincronía
const validandoPago = (showSuccesBuy) => {
  // La función asíncrona reciba el callback
  setTimeout(() => {
    console.log("2 Revisando con el banco y mostrando un loader...");
    showSuccesBuy();
  }, 0);
};

// Encierras el código que quieres ejecutar después en una función
const showSuccesBuy = () => {
  console.log("3 Tu paquete sera enviado :) ");
};

console.log("1 Presiona el boton comprar");
// Pasas la función del código que quieres ejecutar después como parámetro de la
// función en la que se está presentando la asincronía
validandoPago(showSuccesBuy);
