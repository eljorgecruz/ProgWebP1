//Funciones creadas al vuelo

function greet(){
    console.log("Hello");
}

let logGreeting = (miParametro) => miParametro();
//En la funcion logGreeting pasamos como parametro una funcion 
//que se ejecutara cuando se llame a la funcion logGreeting

logGreeting(function(){
    console.log("Hello from a function created on the fly");
})
//En la funciones creadas al vuelo pasamos como parametro toda funcion
//o el fragmento de codigo que queremos que se ejecute

logGreeting(greet);
