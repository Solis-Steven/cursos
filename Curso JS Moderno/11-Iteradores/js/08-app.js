// for in

const pendientes = ["Tareas", "Comer", "Proyecto", "Estudiat"];
 
for( let pendiente in pendientes ) {
    console.log(pendiente); // Itera sobre objetos, aqui me devuelve el indice
}

const auto = {
    modelo: "Camaro",
    year: 2005,
    motor: "6.0"
}

for(let propiedad in auto) {
    console.log(propiedad); // Nos muestra las keys
    console.log(auto[propiedad]); // Nos muestra los valores
}

// Una variante mejor a lo de arriba
for(let [llave, valor] of Object.entries(auto)) {
    console.log(`${llave} => ${valor}`);
}