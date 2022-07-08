const http = require("http");

// Status 200 => Ok
// Status 304 => Not Modified - Ya respondí y no hubo un cambio
// mimeType => Tipos de datos primarios que se pueden intercambiar entre servidor o un cliente. Es un objeto.

const server = http.createServer((request, response) => {
  const status = 200;
  const mimeType = { "Content-Type": "text/html" };
  // Escribir el head de la respuesta, recibe el status y el tipo de datos primarios que se van a intercambiar.
  response.writeHead(status, mimeType);
  // Escribir el archivo html
  response.write("<html><body>Hola</body></html>");
  response.end();
});

server.listen(8080);
console.log("Inicie el servidor");
