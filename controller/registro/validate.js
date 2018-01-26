"use strict";

function validateRegistro(id, pass, pass2, nombre, departamento){
    let errores = [];

    if(!validateNickLogin(id)) {
        errores.push("id");
        msjDanger("Formato de usuario incorrecto - Solo admite letras - Ha de contener al menos 5 caracteres");
    }
    if (!validatePassLogin(pass)) {
        errores.push("pass");
        msjDanger("Formato de pass incorrecto - Solo admite letras - Ha de contener al menos 5 caracterescaracteres");
    }
    if (!validatePassLogin(pass2)) {
        errores.push("pass2");
        msjDanger("Formato de pass 2 incorrecto - Solo admite letras - Ha de contener al menos 5 caracteres");
    }
    if(pass != pass2){
        errores.push("pass2");
        msjDanger("No coinciden las contraseñas");
    }
    if (!validateNombre(nombre)) {
        errores.push("pass2");
        msjDanger("Formato de nombre incorrecto - Solo admite letras y espacios - Ha de contener al menos 10 caracteres");
    }
    if (!validateDepartamento(departamento)) {
        errores.push("pass2");
        msjDanger("Formato de departamento incorrecto - Solo admite letras - Ha de contener al menos 5 caracteres");
    }

    return errores;
}