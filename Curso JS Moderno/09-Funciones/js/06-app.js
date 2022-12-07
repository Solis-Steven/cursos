// Se pueden pasar parametros por default

function saludar(nombre = "desconocido", apellido = "") {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Steven");
saludar("Steven", "Solis");
saludar();