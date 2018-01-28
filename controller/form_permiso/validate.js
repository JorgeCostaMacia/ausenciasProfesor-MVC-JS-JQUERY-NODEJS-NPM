"use strict";

function validateSearch(nombre, fechaCreacion, fechaLlegada){
    let errores = [];

    if (!validateNombre(nombre)) {
        errores.push("nombre");
        msjDanger("Formato de nombre incorrecto - Solo admite letras y espacios - Ha de contener al menos 10 caracteres");
    }

    if (!validateFecha(fechaCreacion, fechaLlegada)) {
        errores.push("fechas");
        msjDanger("Rango de fechas incorrecto - Fecha creacion no puede ser mayor que fecha llegada");
    }

    return errores;
}