// Arrow function con map y forEach

const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700}
];

const nuevoArreglo = carrito.map( producto  => {
    return `${producto.nombre} - Precio: ${producto.precio}`;
} );

carrito.forEach( producto  => `${producto.nombre} - Precio: ${producto.precio}`);