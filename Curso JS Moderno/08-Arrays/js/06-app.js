const carrito = [];

const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// Agregar de forma declarativa
resultado = [...carrito, producto, producto2];


console.table(carrito);
console.table(resultado);