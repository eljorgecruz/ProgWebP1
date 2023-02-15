
//pasamos la funcion como una variable y no funciona por el protect 
//Pero al cambiar el modo de exportacion a module.exports = greet; en el archivo greet.js
//ahora si funciona porque le estamos mandando lo que queremos exportar
let greet = require ('./greet.js');

greet();

//Creamos un objeto con las propiedades nombre y apellido
let persona = {
    nombre: 'Jorge',
    apellido: 'Cruz',
    //Creamos una funcion que nos regrese el nombre y apellido
    getName: function(){
        return `${this.nombre} ${this.apellido}`;
    },
    //Agregamos domicilio como un objeto con propiedades todavia mas adentro
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: "28000",
        municipio: "Colima"
    },
    //Creamos una funcion que nos regrese el domicilio en el orden que queremos
    //para acceder la informacion de las propiedades del objeto domicilio usamos un punto mas
    getDomicilio: function(){
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia}, CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`;
    }
}

//imprimimos el objeto persona asi tal cual
//nos regresa el objeto con todas sus propiedades
//console.log(persona);


console.log(persona.getName());
console.log(persona.getDomicilio());