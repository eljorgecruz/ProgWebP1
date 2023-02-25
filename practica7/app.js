
//var Emiter = require('./emitter');
var Emitter = require('events');

//Inyectamos la funcion require para poder usar el modulo config
var config = require('./config');

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

//Emitimos el evento greet pasandole el nombre del evento

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});


//Creamos un evento y le agregamos un listener
//solo que ahora utilizamos la variable config
//para obtener el nombre del evento
emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

// emitimos los eventos
//ahora solo incluimos el nombre del evento una sola vez
//como estan concadenados en el archivo config.js
//y lo obtenemos con la variable config
//imprimimos todos los eventos greet y jump
emtr.emit(config.events.GREET);
emtr.emit(config.events.JUMP);