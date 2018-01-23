"use strict";

class LoginGestor {
    validateLogin(loginId, loginPass){
        msjClean();

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

    getUsuarioLogin(table, loginId, loginPass, returnFunction){
        let parameter = '?id=' + loginId;
        if(loginPass != ""){ parameter += '&pass=' + loginPass; }
        ajaxQuery("http://localhost:3000/" + table, parameter, returnFunction, "GET", 0);
    }





}




