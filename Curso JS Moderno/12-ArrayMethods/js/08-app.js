// spread operator
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Puedo utilizar spread operator si NO quiero modificar el arreglo original

// Con arreglo de indice
const meses2 = [ ...meses, "Agosto" ]; // Agrego un nuevo valor pero a una copia del arreglo

// Con arreglo de objetos
const producto = { nombre: "Disco duro", precio: 100 }
const carrito2 = [ ...carrito,  producto];