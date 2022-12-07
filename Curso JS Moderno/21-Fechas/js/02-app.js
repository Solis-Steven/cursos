
const fecha1 = new Date().toLocaleString; // Fecha y hora
const fecha2 = new Date().toTimeString; // Hora
const fecha3 = new Date().toLocaleDateString; // Fecha

// Libreria para trabajar con fechas: moment js
// const diaHoy = new Date();

moment.locale('es');
console.log(moment().format("DDDD Do YYYY hh:mm:ss a"))

// Hay muchos formatos, googlear