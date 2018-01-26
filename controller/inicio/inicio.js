"use strict";

var gestor = new Gestor();
var loginManager = new LoginManager();
var peticionManager = new PeticionManager();

function evalCookie(){
    if(gestor.existCookie()) {

        let id = gestor.getLocal()["id"];
        loginManager.getLogin(id, '','evalCookieToken');
    }
}

function evalCookieToken(ressult){
    let cookie = gestor.getCookie("token");
    let token = ressult[0]["token"];

    if(cookie != token){ window.location.href = "../index.html"; }
}

function returnLogin(){
    let id = gestor.getLocal()["id"];
    loginManager.delToken(id);
    gestor.delLocal();
    window.location.href = "../login.html";
}

function getUsuarioLocal(){
    let usuario = gestor.getLocal();

    if(usuario["nivel"] == 'admin'){ /* REDIRECT */ }
    if(usuario["nivel"] == 'direccion'){ peticionManager.getPeticion('', 'getPeticiones'); }
    if(usuario["nivel"] == 'profesor'){ peticionManager.getPeticion(usuario["id"], 'getPeticiones'); }
}

function getPeticiones(ressult){
    let countGenPeticion = 0;
    let countPendientePeticion = 0;
    let countJustificante = 0;
    let countPendienteJustificante = 0;
    let countTotal = 0;

    for(let i = 0; i < ressult.length; i++){
        if(ressult[i]["cola"] == "genPeticion"){

        }
    }

}
