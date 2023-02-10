// function greet() {
//     console.log('Hello');
// }

// greet();//invoke 

// //function as parameters
// function logGreeting(fn) {
//     fn();
// };

// logGreeting(greet);
// //Estamos pasando la funcion greet como parametro a la funcion logGreeting
// //e invocandonla con el nombre del argumento fn

// //function expression
// let greetMe = function() {
//     console.log('Hello from the function expression');
// }

// greetMe();

// logGreeting(greetMe);
//function are fisrt class. pass it as a parameter

//Refactorizacion de las funciones en base a actualizacion ES6 del lenguaje

let greet = () => console.log('Hello');
// declaramos la funcion con la palabra reservada let y el nombre de la funcion
// luego le asignamos una funcion con la flecha que es imprimir "Hello"

greet();//invoke 

// function as parameters
let logGreeting = (fn) => fn();
// Pasamos de usar los corchetes porque ahora solo necesitamos
// poner la flecha para indicar el codigo de la funcion que solo es una linea
// que es la funcion fn que es la que se va a ejecutar

logGreeting(greet);
// Estamos pasando la funcion greet como parametro a la funcion logGreeting
// e invocandonla con el nombre del argumento fn

// function expression
let greetMe = () => console.log('Hello from the function expression');


greetMe();

logGreeting(greetMe);
// function are fisrt class. pass it as a parameter