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

function evalCookieToken(ressult){
    let cookie = gestor.getCookie("token");
    let token = ressult[0]["token"];

    if(cookie == token){ window.location.assign("view/inicio.html"); }
}

function evalRegistroLocal(){
    msjClean();
    let registro = gestor.getLocal()["registro"];
    if(registro === "registro"){
        msjSucces('REGISTRO', "<strong>Se ha dado de alta correctamente</strong>");
        gestor.delLocal();
    }
}