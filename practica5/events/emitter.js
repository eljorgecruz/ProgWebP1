//Creamos la funcion constructora
function Emitter() {
    this.events = {};
}

//Creamos los metodos
// on: para agregar un listener a un evento
Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

// emit: para emitir un evento
Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

//Exportamos el modulo para usarlo en app.js
module.exports = Emitter;