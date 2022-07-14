// PETICIONES
// localhost:8080/index.html
// localhost:8080/pagina1.html
// localhost:8080/foto1.jpg

const http = require("http");
const url = require("url");
const fs = require("fs");
const colors = require("colors");

const MIME_TYPES = {
  html: "text/html",
  css: "text/css",
  jpg: "image/jpg",
  ico: "image/x-icon",
  mp3: "audio/mpeg3",
  mp4: "video/mp4",
  json: "application/json",
};

const server = http.createServer((request, response) => {
  // Paso 1: Obtener la path de la request
  const urlObject = url.parse(request.url);
  const path = urlObject.path;
  console.log(`Path solicitada: `, path);

  //Paso 2: Definimos las variables que le vamos a setear a la response
  let status = 0;
  let responseObject = {};
  let fileSystemPath = "";

  // Validamos la existencia de path para concatenarle static
  if (path) {
    fileSystemPath = `static${path}`;
  }
  console.log(`Path solicitada: `, fileSystemPath);

  // Validar si existe la path en el sistema
  fs.stat(fileSystemPath, (error) => {
    if (!error) {
      fs.readFile(fileSystemPath, (error, file) => {
        console.log("Redfile");
        if (!error) {
          //fileSystemPath= index.html
          status = 200;
          const aux = fileSystemPath.split(".");
          const extension = aux[aux.length - 1];
          const mimeType = MIME_TYPES[extension]; //MIME_TYPE.html;
          response.writeHead(status, {
            "Content-Type": mimeType,
          });
          response.write(file);
          response.end();
        } else {
          status = 500;
          responseObject = { message: "Internal Server Error" };
          response.writeHead(status, { "Content-Type": MIME_TYPES.json });
          response.write(responseObject);
          response.end();
        }
      });
    } else {
      console.log(error);
      status = 404;
      responseObject = { message: "Not found" };
      response.writeHead(status, { "Content-Type": MIME_TYPES.json });
      response.write(responseObject);
      response.end();
    }
  });
});

server.listen(9000);
console.log("API en nodo...".rainbow);
console.log("== esperando peticiones ==".yellow);
