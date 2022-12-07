const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Formas de agregar un valor del objeto a una variable

// Forma anterior
const nombre = producto.nombre;

// Nueva forma (Destructuring)
const { precio, disponible} = producto; // La variable se crea con el nombre de la clave
