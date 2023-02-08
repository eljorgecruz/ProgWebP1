// Lo primero que hicimos fue inicializar el proyecto con init:
//          npm init -y
// Luego instalamos el paquete que vamos a usar que en este caso fue convertidor
//          npm install celsius
//          npm i celsius

//Traigo la funcion desde el modulo con "require" para despues usarla en este archivo
const { toCelsius } = require("celcius");
 
//Imprimo la funcion para ver si funciona
console.log(toCelsius(100)); // 38
console.log(toCelsius(100, 3)); // 37.778
console.log(toCelsius('105.981 degrees F', 5)); // 41.10056

const { toFahrenheit } = require('celsius');
 
console.log(toFahrenheit(36)); // 97
console.log(toFahrenheit(36.68, 3)); // 98.024
console.log(toFahrenheit('-40.691 degrees C', 5)); // -41.24380


//Le cambie el nombre a la constante para traer todos los modulos del paquete
//Asi se ve mas "pro"
const conv = require("celsius");

console.log(conv.toCelsius(20));
console.log(conv.toFahrenheit(100));