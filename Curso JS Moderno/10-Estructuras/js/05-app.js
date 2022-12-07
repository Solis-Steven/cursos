// Switch case

const metodoPago = "efectivo";

switch(metodoPago) {
    case "efectivo":
        console.log("Pagaste con efectivo");
        break; // Siempre se pone un break en el final de cada caso
    default: // Es decesario
        console.log("Metodo de pago no soportado");
        break;
}