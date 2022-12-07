/* Data types
    -String
*/

// Metodos de strings
const producto = "Monitor de 20";
console.log(producto.length); // Ver el largo del string

// IndexOf
console.log(producto.indexOf('de')); // Ver si hay una palabra en el string

// Includes (retorna true o false)
console.log(producto.includes('de'));

// Ver tipo de dato
consoloe.log(typeof producto);



// -Numeros
const numero1 = 100;
const numero2 = 200;

console.log(numero1);
console.log(numero2);

// No existe float o int, todos son numeros
// Objeto en Math en js
let resultado;

resultado = Math.PI;         // El numero pi de toda la vida
resultado = Math.round(2.5); // Redondear
resultado = Math.ceil(2.5);  // Redondear hacia arriba
resultado = Math.floor(2.5); // Redondear hacia abajo
resultado = Math.sqrt(25); // raiz cuadrada
resultado = Math.abs(-25); // valor absoluto
resultado = Math.min(1, 3, 783, 7, 0); // Devuelve el numero menor
resultado = Math.maz(1, 3, 783, 7, 0); // Devuelve el numero mayor
resultado = Math.random(); // Devuelve un numero random entre 0 y 1
resultado = Math.floor(Math.random() * 30); // Devuelve un numero random entre 0 y 30


// Orden de las operaciones
// El orden de toda la vida

// Incrementos
let puntaje = 10;
puntaje++;
++puntaje;

puntaje += 20; // Lo de toda la vida



// Concatenar
const nombre = 'Steven';
const apellido = 'Solis';
console.log(nombre + ' ' + apellido); // Forma antigua

// Template Strings
console.log(`Nombre Cliente: ${nombre} ${apellido}`); // Nueva forma



// Booleans
// true o false