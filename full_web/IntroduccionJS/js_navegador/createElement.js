
// Generar un nuevo enlace
const nuevoEnlace = document.createElement("A");

// Agregamos el hrf
nuevoEnlace.href = "#";

// Agregamos texto
nuevoEnlace.textContent = "Nuevo enlace";

// Agregamos la clase
nuevoEnlace.classList.add("nombre de la clase");

// Agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);