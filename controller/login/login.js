"use strict";

let gestor = new Gestor();
let loginManager = new LoginManager();
let usuarioManager = new UsuarioManager();

function evalCookie(){
    if(gestor.existCookie() ) {
        let id = gestor.getLocal()["id"];
        if(id != null){ loginManager.getLogin(id, '','evalCookieToken'); }
    }
}

function evalCookieToken(resultado){
    let ressult = JSON.parse(resultado);
    let cookie = gestor.getCookie("token");
    let token = ressult[0]["token"];

    if(cookie == token){ window.location.assign("inicio.html"); }
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

    if(ressult.length > 0) {
        gestor.addLogins(new Login(ressult[0]["id"], ressult[0]["pass"], ressult[0]["token"]));
        usuarioManager.getUsuario(ressult[0]["id"], 'addUsuarioLocal');
    }
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

    window.location.assign("inicio.html");
}