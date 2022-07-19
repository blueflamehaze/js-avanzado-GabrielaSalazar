/**
 * Código síncrono: Una linea se ejecuta inmediatamente después de la otra
 * no hay código dependiente o bloqueante.
 */
console.log("============== BLOQUE 1 ==============");
console.log("Primero");
console.log("Segundo");
console.log("Tercero");

/**
 * BLOQUE 2: Problema de la asincronía
 */
console.log("============== BLOQUE 2 ==============");
const validandoPago = () => {
  // Este setTimeout representa una operación que depende de otra entidad
  // en este caso simulas esa dependencia con tiempo
  setTimeout(() => {
    console.log("2 Revisando con el banco y mostrando un loader...");
  }, 0);
};

console.log("1 Presiona el boton comprar");
validandoPago();
console.log("3 Tu paquete sera enviado :) ");
