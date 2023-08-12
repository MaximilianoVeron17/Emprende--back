const http = require("http"); //Guardamos una libreria para crear un servidor

function requestController() {  //declaramos una funcion para que al encontrar un servidor imprima
  console.log("Hola Mundo");
}

const server = http.createServer(requestController);
server.listen(4000);  //este seria mi servidor
