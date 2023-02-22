
//Inyectamos la dependencias greet
let greet = require('./greet1.js');

let greet2 = require('./greet2.js');

const greet3 = require('./greet3.js');

//greet1
greet();

//greet2
greet2.greet();

//greet3
greet3.greet();

//Cambiamos el valor de la propiedad greeting
greet3.greeting = "Hello from the app.js"

//volvemos a inyectar la dependencia greet3
let greet3b = require('./greet3.js');

//greet3b con la nueva propiedad greeting
greet3b.greet();


//Creamos el objeto Greet4 desde el este archivo
const Greet4 = require('./greet4.js');
//internamente se crea un objeto Greet4
let myGreet = new (Greet4);

//llamamos al metodo greet del objeto myGreet
myGreet.greet();


//greet5
const greet5 = require('./greet5.js');
//llamamos los metodos
greet5.greet();
greet5.jump();
