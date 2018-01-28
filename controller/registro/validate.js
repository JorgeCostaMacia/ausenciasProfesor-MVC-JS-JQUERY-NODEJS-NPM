"use strict";

function validateRegistro(id, pass, pass2, nombre, departamento){
    let errores = [];

    if(!validateNickLogin(id)) {
        errores.push("<strong>Formato de usuario incorrecto</strong><br>");
        errores.push("Solo admite letras<br>");
        errores.push("Ha de contener al menos 5 caracteres<br>");
    }
    if (!validatePassLogin(pass)) {
        errores.push("<strong>Formato de pass incorrecto</strong><br>");
        errores.push("Solo admite letras<br>");
        errores.push("Ha de contener al menos 5 caracteres<br>");
    }
    if (!validatePassLogin(pass2)) {
        errores.push("<strong>Formato de repetir pass incorrecto</strong><br>");
        errores.push("Solo admite letras<br>");
        errores.push("Ha de contener al menos 5 caracteres<br>");
    }
    if(pass != pass2){
        errores.push("<strong>No coinciden las contraseñas</strong><br>");
    }
    if (!validateNombre(nombre)) {
        errores.push("<strong>Formato de nombre incorrecto</strong><br>");
        errores.push("Solo admite letras y espacios<br>");
        errores.push("Ha de contener al menos 10 caracteres<br>");
        errores.push("Debe empezar por una letra<br>");
    }
    if (!validateDepartamento(departamento)) {
        errores.push("<strong>Formato de usuario incorrecto</strong><br>");
        errores.push("Solo admite letras<br>");
        errores.push("Ha de contener al menos 5 caracteres<br>");
    }

    return errores;
}