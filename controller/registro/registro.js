"use strict";

let gestor = new Gestor();
let loginManager = new LoginManager();
let registroManager = new RegistroManager();

function evalCookie(){
    if(gestor.existCookie() ) {
        let id = gestor.getLocal()["id"];
        if(id != null){ loginManager.getLogin(id, '','evalCookieToken'); }
    }
}

function evalCookieToken(ressult){
    let cookie = gestor.getCookie("token");
    let token = ressult[0]["token"];

    if(cookie == token){ window.location.assign("../index.html"); }
}

function evalRegistro(){
    msjClean();

    let id = $("#usuario").val();
    let pass = $("#pass").val();
    let pass2 = $("#repetir-pass").val();
    let nombre = $("#nombre").val();
    let departamento = $("#departamento").val();
    let nivel = $("#nivel").val();

    let errores = validateRegistro(id, pass, pass2, nombre, departamento);

    if(errores.length == 0){ loginManager.getLogin(id, '', 'checkExistLogin'); }
}

function checkExistLogin(ressult){
    msjClean();

    if(ressult.length > 0) { msjDanger('No se puede dar de alta - Existe el usuario'); }
    else {
        gestor.addLocal("", "", 'registro');
        registroManager.addRegistro($("#usuario").val(), gestor.stringBase64($("#pass").val()), $("#nombre").val(), $("#departamento").val(), $("#nivel").val());
        setTimeout(window.location.assign("../index.html"), 2000);
    }
}