// Evenetos con el click
const nav = document.querySelector(".navegacion");

nav.addEventListener("click", () => {
    console.log("Click en el nav");
});


// Es como un hover
nav.addEventListener("mouseenter", () => {
    console.log("entrando a la nav");
});

nav.addEventListener("mouseout", () => {
    console.log("saliendo a la nav");
});

// Doble click
nav.addEventListener("dblclick", () => {
    console.log("doble click en el nav");
});

// mousedown es similar al clik
// mouseup cuando sueltas el mouse