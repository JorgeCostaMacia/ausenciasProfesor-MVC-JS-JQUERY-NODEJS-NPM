"use strict";

// ** GET ACOUNT **
//      RECOGE DATOS FORM LoginAjax
//      EVALUA FORMATO DATOS
//      GENERA PARAMETROS - LLAMA BD PARA REGISTRO Y LoginAjax
//      SI FALLA MUESTRA ADVERTENCIAS
function evalformGetAccount(){
    msjClean();

    let getNick = document.getElementById("nickGet").value;
    let getPass = document.getElementById("passGet").value;

    let errores = [];

    if(validateNickLogin(getNick)){ okNickGetIcon(); }
    else {
        errores.push(true);
        badNickGetIcon();
    }

    if(validatePassLogin(getPass)) { okPassGetIcon(); }
    else {
        errores.push(true);
        badPassGetIcon();
    }
    if(errores.length == 0){
        let parametros = "action=login" + "&nick=" + getNick;
        ajaxQuery('controller/ajaxController.php', parametros ,'checkExistGet', 'POST', 0);
    }
}

// ** RETURN AJAX QUERY GetAcount **
//      RECOGE CONSULTA BD
//      EVALUA RESSULT LoginAjax - LOGEA
//      EVALUA RESSULT GET ACOUNT - REGISTRA - LOGEA
//      SI FALLA MUESTRA ADVERTENCIAS
function checkExistGet(resultado){
    let ressult = JSON.parse(resultado);

    msjClean();

    if(ressult["errores"].length != 0){
        msjDanger(ressult["errores"][0]["ERRMESSAGE"]);
    }
    else if(ressult["logins"].length == 0) {
        let nick = document.getElementById("nickGet").value;
        let pass = document.getElementById("passGet").value;

        let parametros = "action=getAcount" + "&nick=" + nick + '&pass=' + pass;
        ajaxQuery('controller/ajaxController.php', parametros ,'getCountGet', 'POST', 0);
    }
    else { msjDanger("No puede registrarse, existe el usuario"); }
}

function getCountGet(resultado){
    let ressult = JSON.parse(resultado);

    msjClean();

    if(ressult["errores"].length != 0){
        msjDanger(ressult["errores"][0]["ERRMESSAGE"]);
    }
    else {
        addformLogin();
        msjSucces("Te has dado de alta correctamente");
    }
}