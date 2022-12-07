// Eventos con el teclado

const busqueda = document.querySelector(".busqueda");

// Cada que presiono una tecla
busqueda.addEventListener("keydown", () => {
    console.log("Escrbiendo...")
});

// Cada que suelta una tecla
busqueda.addEventListener("keyuo", () => {
    console.log("Escrbiendo...")
});

// Cuando entro al input y me salgo
busqueda.addEventListener("blur", () => {
    console.log("Escrbiendo...")
});

// Cuando copio el texto
busqueda.addEventListener("copy", () => {
    console.log("Copiando...")
});

// Cuando pego el texto
busqueda.addEventListener("paste", () => {
    console.log("Pegando...")
});

// Cuando corto el texto
busqueda.addEventListener("cut", () => {
    console.log("Cortando...")
});

// Hace todos los anteriores menos el blur
busqueda.addEventListener("input", (e) => {
    e.defaultPrevented();
    console.log("Todo...")

    // e.target.value es lo que el usuario esta escribiendo 
});