"use strict";

var gestor = new Gestor();
var loginManager = new LoginManager();
var usuarioManager = new UsuarioManager();

function evalCookie(){
    if(gestor.existCookie()) {

        let id = gestor.getLocal()["id"];
        loginManager.getLogin(id, '','evalCookieToken');
    }
}

function evalCookieToken(resultado){
    let ressult = JSON.parse(resultado);
    let cookie = gestor.getCookie("token");
    let token = ressult[0]["token"];

    if(cookie == token){ window.location.href = "inicio.html"; }
}

function evalLogin(){
    msjClean();

    let loginId = document.getElementById("usuario").value;
    let loginPass = document.getElementById("pass").value;

    let errores = validateLogin(loginId, loginPass);

    if(errores.length == 0){ loginManager.getLogin(loginId, gestor.stringBase64(loginPass), 'checkExistLogin'); }
}

function checkExistLogin(resultado){
    msjClean();

    let ressult = JSON.parse(resultado);

    gestor.addLogins(new Login(ressult[0]["id"], ressult[0]["pass"], ressult[0]["token"]));

    if(ressult.length > 0) { usuarioManager.getUsuario(ressult[0]["id"], 'addUsuarioLocal'); }
    else { msjDanger('No existe el usuario o la contraseña es erronea'); }
}

function addUsuarioLocal(resultado){
    msjClean();

    let ressult = JSON.parse(resultado);

    gestor.addUsuarios(new Usuario(ressult[0]["id"], ressult[0]["nombre"], ressult[0]["nivel"], ressult[0]["log"]));

    let token = gestor.genToken();
    loginManager.addToken(ressult[0]["id"], token);
    gestor.addLocal(ressult[0]["id"], ressult[0]["nivel"]);
    gestor.addCookie('token', token, 300);

    window.location.href = "inicio.html";
}