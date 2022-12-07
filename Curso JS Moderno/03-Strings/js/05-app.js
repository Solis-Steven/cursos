// Reemplazr en un string
const saludo = "Hola mundo, hola";

console.log(saludo.replace("Hola", "adios")); // solo reemplaza la primera

// Cortar un string
console.log(saludo.slice(0, 4)); // Toma del caracter 0 al 4
console.log(saludo.slice(4, 0)); // No lo permite

// Otra alternativa a .slice
console.log(saludo.substring(0, 4));
console.log(saludo.substring(4, 0)); // Le da la vuelta

// Si quiero obtener solo un caracter, puede usar los anteriores o
console.log(saludo.charAt(5));