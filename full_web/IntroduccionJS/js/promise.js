const usuarioAutenticado = new Promise(() => {
    const auth = true;

    if(auth) {
        resolve("Usuario autenticado");
    } else {
        reject("No se pudo iniciar sesión");
    }
});

usuarioAutenticado
    .then(function(resultado) {
        console.log(resultado)
    })
    // Otra opcion de escribir la funcion
    .catch((error) => console.log(error))