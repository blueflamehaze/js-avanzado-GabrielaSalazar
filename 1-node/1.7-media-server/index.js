// PETICIONES
// 200 OK
// 201 Created
// 204 No content
// 403 Forbidden
// 404 Not found
// 500 Internal server error

const http = require("http");
const url = require("url");
const colors = require("colors");

const server = http.createServer((request, response) => {
  const urlObject = url.parse(request.url);
  const path = urlObject.path;
  console.log(`Path solicitada: `, path);

  //Paso 2: Definimos las variables que le vamos a setear a la response
  let status = 0;
  let responseObject = {};
  let mimeType = { "Content-Type": "application/json" };

  // PASO 3: (CONTROLLER) Manejador de las peticiones
  if (path === "/") {
    //200
    responseObject = { message: "OK" };
    status = 200;
  } else if (path === "/new-card") {
    //201
    responseObject = { message: "Created" };
    status = 201;
  } else if (path === "/do-login") {
    //204
    responseObject = {};
    status = 204;
  } else if (path === "/modify-admin") {
    //403
    responseObject = {};
    status = 403;
  } else if (path === "/loquesea.txt") {
    //404
    responseObject = { message: "Not Found" };
    status = 404;
  } else {
    //500
    responseObject = { message: "Internal server error" };
    status = 500;
  }

  //Paso 4: Convertir el objeto de salisa en un string
  const stringResponse = JSON.stringify(responseObject);

  // Paso 5: Regresar la respuesta al cliente
  response.writeHead(status, mimeType);
  response.write(stringResponse);
  response.end();
});

server.listen(5500);
console.log("API en nodo...".rainbow);
console.log("== esperando peticiones ==".yellow);
