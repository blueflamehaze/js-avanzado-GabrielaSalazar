/**
 * BLOQUE 4: Promesas (pending, resolve, reject)
 */
console.log("============== BLOQUE 4 ==============");

const promiseValidandoPago = () => {
  return new Promise((resolve, reject) => {
    // El codigo asíncrono de validandoPago debe quedar dentro de la promise
    setTimeout(() => {
      // Este setTimeout representa una operación que depende de otra entidad
      // en este caso simulas esa dependencia con tiempo
      console.log("2 Revisando con el banco y mostrando un loader...");
      resolve();
      // if (status === 200) {
      //     resolve();
      // } else {
      //     reject(new Error('Este es mi custom error'));
      // }
    }, 0);
  });
};

console.log("1 Presiona el boton comprar");
promiseValidandoPago()
  .then((response) => console.log("3 Tu paquete sera enviado :)"))
  .then(() => console.log("4 Gracias por tu compra"))
  .then(() => console.log("5 Avisando al proveedor"))
  .catch((error) => {
    // Un solo catch maneja todos los errores
    console.log("Mostrando un modal con el error: ", error);
  }) // El finally termina el proceso
  .finally(() => console.log("==== FINAL (cerrando loader) ===="));
