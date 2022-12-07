const diaHoy = new Date();
// const diaHoy = new Date("2-5-2002"); dia-mes-a;o y me da tambien el dia que naci

let valor;
valor = diaHoy;

valor = diaHoy.getFullYear(); // A;o actual
valor = diaHoy.getMonth(); // Mes en el que estamos, enero comienza con 0
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime(); // milisegundos transcurridos desde el primero de enero de 1970

valor = diaHoy.setFullYear();