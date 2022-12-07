// Variables
const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail")

// Variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");


const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
eventListeners();
function eventListeners() {
    // Cuando la app arranca
    document.addEventListener("DOMContentLoaded", iniciarApp);

    // Campos del formulario
    email.addEventListener("blur", validarFormulario); // blur es cuando estoy escribiendo en el input y luego me salgo, ahi se ejecuta
    asunto.addEventListener("blur", validarFormulario);
    mensaje.addEventListener("blur", validarFormulario);
}


// Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

// Valida el formulario
function validarFormulario(e) {
    e.preventDefault()
    console.log(e)
    if(e.target.value.length > 0) { // e.target es el input sobre el cual estoy escribieno, es decir, toda la etiqueta
        // Elimina los errores
        const error = document.querySelector("p.error");
        error.remove();

        e.target.classList.remove("border", "border-red-500");
        e.target.classList.add("border", "border-green-500");
    } else {
        // e.target.style.borderBottomColor = "red";
        e.target.classList.remove("border", "border-green-500");
        e.target.classList.add("border", "border-red-500");

        mostrarError("Todos los campos son obligatorios");
    }

    if(e.target.type === "email") {

        if(er.test(e.target.value)) {
            const error = document.querySelector("p.error");
            error.remove();

            e.target.classList.remove("border", "border-red-500");
            e.target.classList.add("border", "border-green-500");
        } else {
            e.target.classList.remove("border", "border-green-500");
            e.target.classList.add("border", "border-red-500");
            mostrarError("El email no es valido")
        }
    }

    if(er.test(email.value) && asunto.value !== "" && mensaje.value !== "") {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove("cursor-not-allowed", "opacity-50")  
    } 
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement("p");
    mensajeError.textContent = mensaje;
    mensajeError.classList.add("border", "border-red-500", "background-color-100", "text-red-300", "p-3", "mt-5", "text-center", "error");

    const errores = document.querySelectorAll(".error");
    if(errores.length ===  0) { // .length solo existe en querySelectorAll, sino es All nos retorna un null
        formulario.appendChild(mensajeError);
    }
}