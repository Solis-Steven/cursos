const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'];

// Unir dos arreglos
const meses3 = meses.concat( meses2 ); // Con coma puede agregar mas arreglos

// spread operator
const resultado = [ ...meses, ... meses2 ];