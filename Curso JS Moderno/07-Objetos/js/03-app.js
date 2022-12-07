// Agregar o eliminar propiedades de un objeto

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Agregar nuevas propiedades
producto.imagen = "imagen.jpg";

// Eliminar propiedades
delete producto.imagen;