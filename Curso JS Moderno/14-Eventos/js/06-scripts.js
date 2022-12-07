// Event Bubbling es cuando se propaga el evento, es decir, se me ejecutan otros eventos como los del padre
// se detiene con e.stopPropagation

const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const tituloDiv = document.querySelector(".titulo");

cardDiv.addEventListener("click", () => {
    console.log("Click en card")
});

infoDiv.addEventListener("click", () => {
    console.log("Click en info")
});

tituloDiv.addEventListener("click", () => {
    console.log("Click en titulo")
});