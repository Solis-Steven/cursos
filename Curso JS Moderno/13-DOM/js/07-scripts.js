// Cambiar css con js

const encabezado = document.querySelector("h1");
encabezado.style.backgroundColor = "red";
encabezado.style.fontFamily = "Arial";
encabezado.style.textTransform = "uppercase";

// Quitar o agregar clases
const card = document.querySelector(".card");
card.classList.add("nueva-clase", "segunda-clase");
card.classList.remove("segunda-clase");