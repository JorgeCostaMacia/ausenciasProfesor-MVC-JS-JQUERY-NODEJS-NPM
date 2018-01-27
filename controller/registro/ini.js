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

    if(cookie == token){ changePageIndex(""); }
}

function changePageIndex(ressult){ window.location.assign("../index.html"); }
