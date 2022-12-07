// Correr js en modo estricto
"use strict";

// Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

// Formas de acceder a los atributos del objeto
console.log(producto.disponible);
console.log(producto["disponible"]); 

// Agregar
producto.imagen = 'imagen.jpg';

// Eliminar
delete producto.disponible;

// Destructuring
// Forma anterior
const precioProducto = producto.precio;
// Nueva forma
const {precio, nombreProducto} = producto;
console.log(precio);

// Evitar que el objeto se puede modificar
Object.freeze(producto);
// Si permite modificar valores existentes
Object.seal(producto);

// Ver si el objeto estal sellado(no se puede modificar)
console.log(Object.isFrozen(producto));

// Unir dos objetos
const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = {...producto, ...medidas};