
function obtenerEmpleados() {
    
    const archivo = "empleados.json";
    // Toma como valor una url o archivo
    fetch(archivo)
        .then(resultado => resultado.json()) // El resultado lo pasamos como json y luego vemos los datos de este mismo
        .then(datos => {
            const {empleados} = datos;
            // console.log(empleados);   

            empleados.forEach(empleado => {
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);
                console.log("");

                // document.querySelector('.contenido').textContent = empleado.nombre
            });
        }) 
}

obtenerEmpleados();