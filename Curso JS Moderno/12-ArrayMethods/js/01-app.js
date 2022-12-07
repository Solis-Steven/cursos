const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor existe en un arreglo
const resultado = meses.includes("Enero"); // No funciona para arreglo de objetos

// En un arreglo de objetos se usa .some()
const existe = carrito.some( producto => producto.nombre === "celular" );

// En un arreglo tradicional con .some
const existe2 = carrito.some( mes => mes === "Febrero" );