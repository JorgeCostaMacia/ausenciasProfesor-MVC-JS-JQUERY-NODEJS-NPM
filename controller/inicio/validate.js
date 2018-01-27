"use strict";

function validateLogin(loginId, loginPass){
    let errores = [];

    if(!validateNickLogin(loginId)) {
        errores.push("idLogin");
        msjDanger("Formato de usuario incorrecto - Solo admite letras y numeros - Ha de contener al menos 5 caracteres");
    }
    if (!validatePassLogin(loginPass)) {
        errores.push("passLogin");
        msjDanger("Formato de pass incorrecto - Solo admite letras y numeros - Ha de contener al menos 5 caracteres");
    }
    return errores;
}