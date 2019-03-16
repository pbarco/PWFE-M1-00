//ES8: import http from "./http" (es lo que se viene en la proxima version)
let http = require("http")

http.createServer(function(peticion, respuesta){

	let saludo = "Hola al mundo desde <strong>Node.js</strong>!";
	
	respuesta.setHeader ("Content-Type", "text/html")

	respuesta.write (saludo)
	
	respuesta.end("Usted quiere este recurso: " + peticion.url)

}).listen(2000)



