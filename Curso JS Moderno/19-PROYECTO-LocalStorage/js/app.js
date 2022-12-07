// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = []


// Event Listeners
eventListeners();

function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet)

    // Cuando el documento este listo
    document.addEventListener("DOMContentLoaded", () => {
        tweets = JSON.parse(localStorage.getItem("tweets")) || []
        console.log(tweets)
    });
}


// Funciones
function agregarTweet(e) {
    e.preventDefault();
    
    // Textarea donde el usuario escribe
    const tweet = document.querySelector("#tweet").value;
    
    // Validacion..
    if(tweet === "") {
        mostrarError("El tweet no puede estar vacio")
        return;
    } 

    const tweetObj = {
        id: Date.now(),
        // texto: tweet
        tweet // Cuando la llave y valor son igual, solo puede dejar uno, esta linea es igual a tweet: tweet
    }

    // Agregar al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    // Una vez agregado, vamos a crear el HTML
    crearHTML();

    // Reinicia el formulario
    formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement("p");
    mensajeError.textContent = error;
    mensajeError.classList.add("error");

    // Insertarlo en el contenido
    const contenido = document.querySelector("#contenido");
    contenido.appendChild(mensajeError);

    // Elimina la alerta despues de 3s
    setTimeout( () => {
        mensajeError.remove();
    }, 3000);
}

// Muestra un listado de los tweets
function crearHTML() {

    limpiarHTML();
    
    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            // Agregar el boton de eliminar
            const btnEliminar = document.createElement("a");
            btnEliminar.classList.add("borrar-tweet");
            btnEliminar.textContent = "X";

            // Agregar la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el HTML
            const li = document.createElement("li");

            // Agregamos texto
            li.innerText = tweet.tweet;

            // Adigna el boton
            li.appendChild(btnEliminar);

            // Insertando en el html
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

// Agrega los tweets al local storage
function sincronizarStorage() {
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

// Elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id != id); // Todos exepto al que le di click
}