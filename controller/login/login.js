"use strict";

var loginGestor = new LoginGestor();
var gestor = new Gestor();


function evalLogin(){
    msjClean();

    let loginId = document.getElementById("usuario").value;
    let loginPass = document.getElementById("pass").value;

    let errores = loginGestor.validateLogin(loginId, loginPass);

    if(errores.length == 0){ loginGestor.getUsuarioLogin('login', loginId, loginPass, 'checkExistLogin'); }
}

function checkExistLogin(resultado){
    msjClean();

    let ressult = JSON.parse(resultado);

    if(ressult.length > 0) { loginGestor.getUsuarioLogin('usuarios', ressult[0]["id"], '', 'getUsuario'); }
    else { msjDanger('No existe el usuario o la contraseña es erronea'); }
}

function getUsuario(resultado){
    msjClean();

    let ressult = JSON.parse(resultado);

    gestor.addLocal(ressult[0]["id"], ressult[0]["nivel"]);
}