"use strict";

function validateLogin(loginId, loginPass){
    let errores = [];

    if(!validateNickLogin(loginId)) {
        errores.push("<strong>Formato de usuario incorrecto</strong><br>");
        errores.push("Solo admite letras<br>");
        errores.push("Ha de contener al menos 5 caracteres<br>");
    }
    if (!validatePassLogin(loginPass)) {
        errores.push("<strong>Formato de pass incorrecto</strong><br>");
        errores.push("Solo admite letras<br>");
        errores.push("Ha de contener al menos 5 caracteres<br>");
    }

    return errores;
}