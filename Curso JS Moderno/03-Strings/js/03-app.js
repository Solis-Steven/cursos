// Maneras de concatenar un string
const saludo = "Hola";
const nombre = "Steven"
console.log(saludo.concat(nombre)); // sin espacio
console.log(saludo.concat(" Mundo")); // con espacio
console.log(saludo + nombre); // sin espacio
console.log(saludo, nombre); // sin espacio

// La forma mas nueva es la siguiente
console.log(`${saludo} ${nombre}`); // con espacio