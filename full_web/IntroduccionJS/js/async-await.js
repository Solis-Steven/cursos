
/*
Ejemplo de codigo asincrono:
    Si en un restaurante alguien pide un corte que
    va a tardar 30 min y luego llega alguien y pide un
    vaso con agua, no se van a esperar hasta que 
    esté el corte para dar el vaso con agua. Algo así son
    las funciones asíncronas
*/

function descargarNuevoCliente() {
    return new Promise(resolve => {
        console.log("Descargando clientes... espera");

        setTimeout(function() {
            resolve("Los clientes fueron descargados");
        }, 5000);

    });
}

// Creamos una función asíncrona
async function app() {
    try {
        const resultado = await descargarNuevoCliente();
        console.log(resultado);
    } catch(error) {
        console.log(error);
    }
}

app();

// Codigo que no necesita de app y se sigue ejecutando
console.log("Este codigo no se bloquea");