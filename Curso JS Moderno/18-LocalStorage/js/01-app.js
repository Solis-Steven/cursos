// Local storage solo almacena strings

localStorage.setItems("nombre", "Steven"); // key, value

sessionStorage.setItems("nombre", "Steven");

// Puedo convertir un objeto en string para almacenarlos
const producto = {
    nombre: "Tablet",
    precio: 500
}

const productoString = JSON.stringify(producto);
localStorage.setItems("producto", productoString); // Se puede hacer lo mismo con un arreglo