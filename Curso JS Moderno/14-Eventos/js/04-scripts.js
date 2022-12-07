// Evento en un formulario

const formulario = document.querySelector("#formulario");

// Cuando alguien le da al boton del submit
formulario.addEventListener("submit", e => {
    e.preventDefault();
});