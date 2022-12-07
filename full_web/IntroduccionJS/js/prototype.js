// Creamos un objeto
function Cliente(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Creamos nuestra funcion prototype SOBRE el objeto Cliente
Cliente.prototype.formatearCliente = function() {
    return `El nombre del cliente es ${this.nombre} y tiene ${this.edad} años`
}

// Creamos un cliente
const cliente = new Cliente("Steven", 19);

Cliente.formatearCliente(cliente.formatearCliente());