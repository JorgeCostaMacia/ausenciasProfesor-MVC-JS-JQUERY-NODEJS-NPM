"use strict";

var gestor = new Gestor();
var loginManager = new LoginManager();
var peticionManager = new PeticionManager();

function evalCookie(){
    if(gestor.existCookie()) {
        loginManager.getLogin(gestor.getLocal()["id"], '','evalCookieToken');
    }
}

function evalCookieToken(ressult){
    if(ressult.length != 0){
        let cookie = gestor.getCookie("token");
        let token = ressult[0]["token"];

        if(cookie != token){ changePageInicio(""); }
    }
    else { changePageInicio(""); }
}

function returnLogin(){
    let id = gestor.getLocal()["id"];
    gestor.delLocal();
    loginManager.delToken(id, 'changePageInicio');
}

function changePageInicio(ressult){ window.location.assign("../index.html"); }

function getUsuarioLocal(){
    let usuario = gestor.getLocal();

    addUsuarioForm();

    if(usuario["nivel"] == 'admin'){ /* REDIRECT */ }
    else if(usuario["nivel"] == 'direccion'){ peticionManager.getPeticion('', 'getPeticionesCount'); }
    else if(usuario["nivel"] == 'profesor'){
        peticionManager.getPeticion('nombreSolicitante=' + usuario["nombre"], 'getPeticionesCount');
    }
}

function addUsuarioForm(){
    let usuario = gestor.getLocal();
    injectUsuarioForm(usuario["nombre"].split(" ")[0]);
}

function getPeticionesCount(ressult){
    let countGenPermiso = 0;
    let countPenAutorizarPermiso = 0;
    let countPenJustificante = 0;
    let countPenAutorizarJustificante = 0;
    let countAusenciaFinalizada = 0;

    for(let i = 0; i < ressult.length; i++){
        if(ressult[i]["cola"] == "genPermiso"){ countGenPermiso++; }
        else if(ressult[i]["cola"] == "penAutorizarPermiso"){ countPenAutorizarPermiso++; }
        else if(ressult[i]["cola"] == "penJustificante"){ countPenJustificante++; }
        else if(ressult[i]["cola"] == "penAutorizarJustificante"){ countPenAutorizarJustificante++; }
        else if(ressult[i]["cola"] == "ausenciaFinalizada"){ countAusenciaFinalizada++; }
    }

    injectCountForm(countGenPermiso, countPenAutorizarPermiso, countPenJustificante, countPenAutorizarJustificante, countAusenciaFinalizada);
}

function iniFormGenPeticion(){
    if(gestor.getLocal()["idPeticion"] != ""){
        peticionManager.getPeticion("id=" + gestor.getLocal()["idPeticion"], 'formGetPeticion');
    }
}

function formGetPeticion(ressult){
    if(ressult.length == 0){ injectCaption("No hay documentos que mostrar"); }
    else {
        for(let i = 0; i < ressult.length; i++){
            let peticion = new Peticion(ressult[i]["id"], ressult[i]["idUsuario"], ressult[i]["cola"], ressult[i]["nombreSolicitante"],  ressult[i]["fechaCreacion"], ressult[i]["fechaLlegada"], ressult[i]["motivo"], ressult[i]["jornada"], ressult[i]["horario"], ressult[i]["observaciones"], ressult[i]["fechaFirma"], ressult[i]["firma"], ressult[i]["comentarios"], ressult[i]["anexos"]);
            gestor.addPeticiones(peticion);
        }
        injectFormPermiso(gestor.getPeticiones()[0]);
    }

    if( gestor.getLocal()["accion"] == "detalles"){
        disableFormGenPeticion();
    }
}