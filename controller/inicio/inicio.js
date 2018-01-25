"use strict";

var gestor = new Gestor();
var loginManager = new LoginManager();

function evalCookie(){
    if(gestor.existCookie()) {

        let id = gestor.getLocal()["id"];
        loginManager.getLogin(id, '','evalCookieToken');
    }
}

function evalCookieToken(ressult){
    let cookie = gestor.getCookie("token");
    let token = ressult[0]["token"];

    if(cookie != token){ window.location.href = "login.html"; }
}

function returnLogin(){
    let id = gestor.getLocal()["id"];
    loginManager.delToken(id);
    gestor.delLocal();
    window.location.href = "login.html";
}

function addContent(){

}