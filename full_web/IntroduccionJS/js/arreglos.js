const numeros = [10, 20, 30, 40, 50];
console.log(numeros);

const meses = ['Enero', 'Mayo', 'Diciembre'];
console.table(meses);

// Acceder a los valores del arreglo
console.log(numeros[4]);

// Conocer la extension de un arreglo]
console.log(numeros.length);

// Agregar elementos
numeros[5] = 60; // No es muy comun
numeros.push(60); // Forma comun y agrega al final del arregl0
numeros.push(70, 80);
numeros.unshift(-10, -20, -30) // Agrega al inicio del arreglo

// Elimninar elementos
meses.pop(); // Ultimo
meses.shift(); // Primero
meses.splice(2, 1); // El primer valor indica el indice donde comienzo y el segundo es cuantos quiero eliminar a partir de ahi

// Rest Operator o Spread Operato
const nuevoArreglo = [...meses, 'Junio']; // Igual al push pero no modifica el original


const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Laptop', precio: 800},
    {nombre: 'Celular', precio: 500}
];

// Array Methods

// forEach
meses.forEach(function(mes) {
    if(mes == 'Enero') {
        console.log("Marzo si existe");
    }
});

// Includes es ideal si es un arreglo plano
let resultado = meses.includes('Enero');
console.log(resultado);

// Some es ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre == 'Celular';
});

// Reduce
resultado = carrito.reduce(function(total, producto) { // Si quiero sumar todos los precios
    return total + producto.precio
}, 0); //valor inicial

// Filter para filtrar datos
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});