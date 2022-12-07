// Congelar un objeto para que no se pueda modificar

"use strict"; // Evaluada este archivo de forma estricto, no permitas malas practias

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// No poder agregar o eliminar propiedades pero si modificar las existentes
Object.seal( producto );

// Ver si un objeto esta congelao
console.log(Object.isSealed( producto ));