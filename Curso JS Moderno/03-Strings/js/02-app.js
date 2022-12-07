/* Ver el largo de caracters de un string
inclullendo los espacios*/
const oracion = "Hola, mi nombre es Steven";
const largo = oracion.length;

/* Ver si una palabra o letra se encuentra
dentro de un string*/

/* Este metodo nos devuelve a partir de que
indice se encuentra la palabra y si no TextEncoderStream,
devuelve el valor de -1*/ 
const indice = oracion.indexOf("nombre");

// Si queremos obtener un valor booleano
const booleano = oracion.includes("nombre");