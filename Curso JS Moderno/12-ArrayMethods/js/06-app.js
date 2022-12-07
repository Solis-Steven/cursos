const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// .every devuelve true si todos los elementos de un arreglo cumplen la condicion
const resultado = carrito.every( producto => producto.precio < 1000 );
const resultado2 = carrito.every( producto => producto.precio < 5000 );