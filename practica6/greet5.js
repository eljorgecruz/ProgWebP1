let greeting = "Hello from the greet5";

let greet = () => {
    console.log(greeting);
}

let jump = () => {
    console.log("Jumping from greet5");
}


//pasamos los key value verbs para que sean exportados
//puede escribirse como module.exports = {greet: greet, jump: jump}
//si los nombres de las variables son iguales a los nombres de las funciones
//se puede escribir como module.exports = {greet, jump}, 
//escirbiendo solo el nombre de la variable
module.exports = {
    greet, 
    jump
}