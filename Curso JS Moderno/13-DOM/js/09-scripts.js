// Eliminar elementos del DOM

const primerEnlace = document.querySelector("a");
primerEnlace.remove(); // Eliminar por si mismo

// Eliminar un elemento desde el padre
const navegacion = document.querySelector(".nav");
navegacion.removeChild(navegacion.children[2]);