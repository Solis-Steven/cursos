const meses = ["Febrero", "Marzo", "Abril", "Mayo"];

// Destructuring a arreglos

// Va por posiciones
const  [primero, segundo] = meses;

// Si no quiero el primero ni el segundo pero si el tercero
const [ , , tercero] = meses;

const [uno, ...resto] = meses // Saco el primero y luego el otro