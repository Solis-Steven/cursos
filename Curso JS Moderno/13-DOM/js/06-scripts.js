let titulo = document.querySelector(".contenido-hero h1");


// Diferencias entre .innerText y .textContent
/*
    Si se le aplica la propiedad CSS visibility: hidden; inerText no lo encuentra,
    textContent si 
*/

document.querySelector(".contenido-hero h1"). textContent = "Nuevo texto";

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';