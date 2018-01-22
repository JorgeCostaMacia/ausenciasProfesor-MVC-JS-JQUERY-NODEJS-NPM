"use strict";

function evalLogin(){
    msjClean();
    let loginId = document.getElementById("id").value;
    let loginPass = document.getElementById("pass").value;

    let loginGestor = new loginGestor();

    let errores = loginGestor.validateLogin(loginId, loginPass);

    if(errores.length == 0){
        loginGestor.getUsuarioLogin(loginId, loginPass, 'checkExistLogin');
    }
}

function checkExistLogin(resultado){
    let ressult = JSON.parse(resultado);

    else if(ressult.length > 0) { formLogin.submit(); }
    else { msjDanger('No existe el usuario o la contraseña es erronea'); }
}


function evalRegistrar(){
    msjClean();

    let loginId = document.getElementById("nickGet").value;
    let loginPass = document.getElementById("passGet").value;

    let loginGestor = new loginGestor();
    let errores = loginGestor.validateLogin(loginId, loginPass);

    if(errores.length == 0){
        loginGestor.getUsuarioLogin(loginId, loginPass, 'checkExistRegistrar');
    }
}

function checkExistRegistrar(resultado){
    let ressult = JSON.parse(resultado);

    msjClean();

    else if(ressult.length == 0) {
        let nick = document.getElementById("nickGet").value;
        let pass = document.getElementById("passGet").value;

        let parametros = "action=getAcount" + "&nick=" + nick + '&pass=' + pass;
        ajaxQuery('controller/ajaxController.php', parametros ,'getCountGet', 'POST', 0);
    }
    else { msjDanger("No puede registrarse, existe el usuario"); }


}