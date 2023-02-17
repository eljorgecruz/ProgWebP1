let obj = {
    nombre: 'Jorge',
    edad: 19,
    apellido: 'Cruz',
    keypress: function () {
        return('Se ha presionado una tecla');
    },
    mouseOver: function () {
        return('el puntero del mouse esta arriba');
    }
}



//con los corchetes [] invocamos la propiedad del objeto en lugar 
//de escribir el nombre de la propiedad con el punto
console.log(obj.nombre);
console.log(obj['nombre']);

//Creamos una variable que va a contener el nombre de la propiedad
//con los corchetes [] invocamos la propiedad del objeto en lugar 
//que esta contenida en la variable
let mykey = 'nombre';
console.log(obj[mykey]);


//Pasamos la funcion a una variable y la ejecutamos
// al asignarle a la variable el nombre de la funcion 
//escribimos los parentesis para ejecutarla
myKey = 'keypress';
console.log(obj[myKey]());

myKey = 'mouseOver';
console.log(obj[myKey]());

//Creamos un array con varios tipos de datos
let myarray = [];
myarray.push(4);
myarray.push('una cadena');
myarray.push(obj);
//Agregamos una funcion al array 
//la funcion es anonima porque no tiene nombre
myarray.push(function () {
    return("Hola desde el array");
});

console.log(myarray);


//Creamos ahora un array con funciones
let funcArray = [];

//Agregamos funciones al array
funcArray.push(() => {
    return("Function 1")
});

funcArray.push(() => {
    return("Function 2")
});

funcArray.push(() => {
    return("Function 3")
});

//Recorremos el array con un forEach 
//y ejecutamos cada funcion
funcArray.forEach((item) => {
    console.log(item());
});

//console.log(funcArray());

//evemtos por solicitud 

//Inyectamos la funcion require para poder usar el modulo Emitter
const Emitter = require('./emitter.js');

//Creamos una instancia de la clase Emitter
const emtr = new Emitter();


//Creamos un evento y le agregamos un listener
emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

//Creamos otro evento y le agregamos un listener con el mismo nombre
emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

emtr.on('jump', () => {
    console.log('Someone jumped!');
});

//Emitimos el evento
console.log('Hello!');

//Emitimos el evento greet pasandole el nombre del evento
emtr.emit('greet');
emtr.emit('jump');