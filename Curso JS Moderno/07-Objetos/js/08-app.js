// Congelar un objeto para que no se pueda modificar

"use strict"; // Evaluada este archivo de forma estricto, no permitas malas practias

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Hacer que un objeto no se pueda modificar
Object.freeze( producto );

// Ver si un objeto esta congelao
console.log(Object.isFrozen( producto ));