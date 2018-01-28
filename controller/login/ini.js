"use strict";

let gestor = new Gestor();
let loginManager = new LoginManager();
let usuarioManager = new UsuarioManager();

// SI EXISTE COOKIE
// RECOGE ID DE LOCALSTORAGE
// SI ID != NULL PIDE LOGIN A BD
function evalCookie(){
    if(gestor.existCookie() ) {
        let id = gestor.getLocal()["id"];
        if(id != null){ loginManager.getLogin(id, '','evalCookieToken'); }
    }
}

// RECIBE RESULTADO LOGIN BD
// SI RECIBE EVALUA QUE TOKEN BD = TOKEN COOKIE
// SI SON IGUALES LOGEA
function evalCookieToken(ressult){
    if(ressult.length != 0){
        let cookie = gestor.getCookie("token");
        let token = ressult[0]["token"];

       if(cookie == token){ window.location.assign("view/inicio.html"); }
    }
}

// LIMPIA MENSAJES
// RECOGE REGISTRO DE LOCALSTORAGE
// SI HAY ALGUN REGISTRO MUESTRA ADVERTENCIA
// BORRA LOCALSTORAGE
function evalRegistroLocal(){
    msjClean();
    let registro = gestor.getLocal()["registro"];
    if(registro === "registro"){
        msjSucces('REGISTRO', "<strong>Se ha dado de alta correctamente</strong>");
        gestor.delLocal();
    }
}