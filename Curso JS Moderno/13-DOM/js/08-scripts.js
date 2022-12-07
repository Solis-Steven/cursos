// Con .childNodes los espacios en blancos se vuelven elementos

// Con .children no

// Traversing the DOM

// Yendo hacia los hijos
const card = document.querySelector(".card");
card.children[1].children[1].textContent = "Nuevo texto desde traversing the DOM";
card.children[0].src = "img/hacer3.jpg";

// Yendo hacia el padre
// card.parentNode con espacios en blanco
// card.parentElement sin espacios en blanco
// card.nextElementSibling para ver hermano siguiente

const ultimoCard = document.querySelector("card:last-og-type");
console.log(ultimoCard.previousElementSibling); // Ver hermano anterior