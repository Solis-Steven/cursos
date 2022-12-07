
// Document hace referencia a todo lo que tenemos en nuestro HTML

// Seleccionar un elemento por id
const boton = document.querySelector("#button");

// Nos permite registrar un evento a boton
boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`EL resultado es ${resultado}`))
});

if(Notification.permission == "granted") {
    new Notification("Esta es una notificacion")
}