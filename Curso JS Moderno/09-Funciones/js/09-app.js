// Funciones a un objeto

const reproductor = {
    reproducir: function() {
        console.log("Reproduciendo cancion...")
    }
}

reproductor.reproducir(); // Tambien se pueden pasar parametros

// Se pueden agregar funciones al objeto desde afuera
reproductor.borar = function() {
    console.log("Borrando cancion");
}