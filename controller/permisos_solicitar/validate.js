"use strict";

function validateSearch(nombre, fechaCreacion, fechaLlegada){
    let errores = [];

    if (!validateNombre(nombre)) {
        errores.push("nombre");
        msjDanger("Formato de nombre incorrecto - Solo admite letras y espacios - Ha de contener al menos 10 caracteres");
    }

    return errores;
}