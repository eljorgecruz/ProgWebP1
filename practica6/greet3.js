
//Creando un objeto con la función constructora
function Greetr(){
    this.greeting = 'Hello from the function constructor';
    this.greet = function(){
        console.log(this.greeting);
    }
}

//exportamos el objeto
module.exports = new Greetr;