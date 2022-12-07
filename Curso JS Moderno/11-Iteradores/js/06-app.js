// forEach

const pendientes = ["Tareas", "Comer", "Proyecto", "Estudiat"];

pendientes.forEach(pendiente => console.log(pendiente));

// Esta disenado para arrays, por lo que si le paso otro parametro, este seria el indice
pendientes.forEach((pendiente, indice) => {
    console.log(`${indice} ${pendiente}`);
})

// map hace lo mismo pero copia el arreglo