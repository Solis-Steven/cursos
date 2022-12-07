// // Nota: Faltan el resto de filtrados

// // Variables
// const marca = document.querySelector("#marca")
// const year = document.querySelector("#year")
// const minimo = document.querySelector("#minimo")
// const maximo = document.querySelector("#maximo")
// const puertas = document.querySelector("#puertas")
// const transmision = document.querySelector("#transmision")
// const color = document.querySelector("#color")
 
// // Contenedor para los resultados
// const resultado = document.querySelector("#resultado");


// const maxYear = new Date().getFullYear();
// const minYear = maxYear - 10

// // Generar un objeto con la busqueda
// const datosBusqueda = {
//     marca: "",
//     year: "",
//     minimo: "",
//     maximo: "",
//     puertas: "",
//     transmision: "",
//     color: ""
// }

// // Eventos
// document.addEventListener("DOMContentLoaded", () => {
//     mostrarAutos(autos); // Muestra los autos al cargar

//     // LLena las opciones de year
//     llenarSelect();
// })

// // Event listener para los select de busqueda
// marca.addEventListener("change", e => { // change es cuando cambia el select
//     datosBusqueda.marca = e.target.value;

//     filtrarAuto();
// });

// year.addEventListener("change", e => {
//     datosBusqueda.year = parseInt( e.target.value );

//     filtrarAuto();
// });

// minimo.addEventListener("change", e => {
//     datosBusqueda.minimo = e.target.value;  
// });

// maximo.addEventListener("change", e => {
//     datosBusqueda.maximo = e.target.value;
// });

// puertas.addEventListener("change", e => {
//     datosBusqueda.puertas = e.target.value;
// }) ;

// transmision.addEventListener("change", e => {
//     datosBusqueda.transmision = e.target.value;
// });

// color.addEventListener("change", e => {
//     datosBusqueda.color = e.target.value;
// });

// // Funciones
// function mostrarAutos(autos) {
//     limpiarHtml(); // Elimina el HTML previo

//     autos.forEach(auto => {
//         const { marca, modelo, year, precio, puertas, color, transmision } = auto;
//         const autoHTML = document.createElement("p");

//         autoHTML.textContent = `
//             ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color} 
//         `

//         // Insertar el auto en el HTML
//         resultado.appendChild(autoHTML)
//     });
// }

// // Limpiar HTML
// function limpiarHtml() {
//     while(resultado.firstChild) { // Mientras haya algo
//         resultado.removeChild(resultado.firstChild)
//     }
// }

// // Genera los a;os del selectr
// function llenarSelect() {
//     for( let i = maxYear; i >= minYear; i-- ) {
//         const opcion = document.createElement("option");
//         opcion.value = i;
//         opcion.textContent = i;
//         year.appendChild(opcion);
//     }
// }

// // Funcion que filtra en base a la busqueda
// function filtrarAuto() {
//     const resultado = autos.filter(filtrarMarca).filter(filtrarYear );
    

//     if(resultado.lenght) {
//         mostrarAutos(resultado);
//     } else {
//         noResultado();
//     }
// }

// function noResultado() {
//     limpiarHtml();

//     const noResultado = document.createElement("div");
//     noResultado.classList.add("alerta", "error");
//     noResultado.textContent = "No hay resultados";
//     resultado.appendChild(noResultado);
// }

// function filtrarMarca(auto) {
//     if(datosBusqueda.marca) {
//         return auto.marca === datosBusqueda.marca;
//     }
//     return auto;
// }

// function filtrarYear(auto) {
//     if(auto.year) {
//         return auto.year === datosBusqueda.year;
//     }
//     return auto;
// }












// Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const precioMin = document.querySelector("#minimo");
const precioMax = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const resultado = document.querySelector("#resultado");

const datosBusqueda = {
    marca: "",
    modelo: "",
    year: "",
    precio: "",
    puertas: "",
    color: "",
    transmision: ""
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos);
})

marca.addEventListener("change", e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})

// Funciones

// Limpia el HTML donde se muestra el resultado de los autos
function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Muestra el resultado de los autos buscados
function mostrarAutos(autos) {
    limpiarHTML();

    autos.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        const autoHTML = document.createElement("p");

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}`; 

        resultado.appendChild(autoHTML);
    });
}

function noResultado() {
    limpiarHTML();

    const error = document.createElement("p");
    error.classList.add("alerta", "error");
    error.textContent = "Resultado no encontrado";
    resultado.appendChild(error);
}

function filtarMarca(auto) {
    if(datosBusqueda.marca) {
        return datosBusqueda.marca === auto.marca;
    }
    return auto;
}

function filtrarPuertas(auto) {
    if(datosBusqueda.puertas) {
        return datosBusqueda.puertas === auto.puertas;
    }
    return auto;
}

function filtrarAuto() {
    const resultados = autos.filter(filtrarPuertas);
    if(resultados.length) {
        mostrarAutos(resultados);
    } else {
        noResultado();
    }
}