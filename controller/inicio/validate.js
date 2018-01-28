"use strict";

function validateSearch(nombre, fechaCreacion, fechaLlegada){
    let errores = [];

    if (!validateNombre(nombre)) {
        errores.push("<strong>Formato de nombre incorrecto</strong><br>");
        errores.push("Solo admite letras y espacios<br>");
        errores.push("Ha de contener al menos 10 caracteres<br>");
        errores.push("Debe empezar por una letra<br>");
    }

    if (!validateFecha(fechaCreacion, fechaLlegada)) {
        errores.push("<strong>Rango de fechas incorrecto</strong><br>");
        errores.push("Fecha creacion no puede ser mayor que fecha llegada<br>");
    }

    return errores;
}