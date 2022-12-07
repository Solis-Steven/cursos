// Copiar dos objetos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

// Unirlos
const resultado = Object.assign( producto, medidas); // Crea un objeto con las propiedades de ambos

// Spread Operator o Rest operator
const resultado2 = { ...producto, ...medidas }; // Los tres puntos quiere decir que copie