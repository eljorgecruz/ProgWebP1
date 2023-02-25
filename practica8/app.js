//inyectamos el modulo express que no permitira crear el servidor
const express = require('express')
const app = express()

//creamos la ruta raiz y le pasamos un callback que recibe dos parametros
//req: objeto que contiene la informacion de la peticion
//res: objeto que contiene la informacion de la respuesta
app.get('/', function (req, res) {
  //enviamos la respuesta
  res.send('Hello World')
})

//dejamos el servidor a la escucha en el puerto 3000
app.listen(3000)

//ejecutamos el servidor con el comando node app.js
//la terminal se quedara bloqueada hasta que se cierre el servidor con ctrl+c
//abrimos el navegador y escribimos localhost:3000
//el navegador nos mostrara la respuesta del servidor