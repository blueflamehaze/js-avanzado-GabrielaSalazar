const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((request, response) => {
  const urlObject = url.parse(request.url);
  const path = urlObject.path;
  let fileSystemPath = "";

  if (path === "/") {
    fileSystemPath = "static/index.html";
  } else {
    fileSystemPath = `static/${path}`;
  }

  // Comprobar si existe el archivo, para eso vamos a usar el módulo fs
  fs.stat(fileSystemPath, (error) => {
    if (!error) {
      //Leer la página web
      fs.readFile(fileSystemPath, (error, file) => {
        if (!error) {
          const status = 200;
          const mimeType = { "Content-Type": "text/html" };
          response.writeHead(status, mimeType);
          // Le tengo que regresar el path de la página que está ya en el archivo
          response.write(file);
          //El método end terminar una petición
          response.end();
        } else {
          const status = 500;
          const mimeType = { "Content-Type": "text/plain" };
          response.writeHead(status, mimeType);
          response.write("Error en mi servidor ");
          //El método end terminar una petición
          response.end();
        }
      });
    } else {
      // Vamos a escribir la respuesta sobre el response
      const status = 404;
      const mimeType = { "Content-Type": "text/html" };
      response.writeHead(status, mimeType);
      response.write("<html><body>404 Not Found</body></html>");
      //El método end terminar una petición
      response.end();
    }
  });
});

server.listen(5500);
console.log("Inicie mi primer servidor");
