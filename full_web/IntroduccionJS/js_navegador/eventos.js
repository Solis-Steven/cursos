
// load espera a que el JS y los archivos que dependen del HTML estén listos
window.addEventListener("load", function() {
    console.log(1);
});

// DOMContentLoaded solo espera por el HTML pero no CSS o imagenes
document.addEventListener("DOMContentLoaded", function() {
    console.log(2);
});

// Seleccionar elemento y asociarles un evento
const btnEnviar = document.querySelector(".boton--primario");
btnEnviar.addEventListener("click", function(evento) {
    console.log("Enviando formulario");
    evento.preventDefault(); //Siempre lo necesitamos para validar formularios

});

// Eventos de los inputs y text area
const nombre = document.querySelector("#nombre");
// input lee en tiempo real y change si es para cuando el usuario termine
nombre.addEventListener("input", function(e) {
    console.log(e.target.value);
});