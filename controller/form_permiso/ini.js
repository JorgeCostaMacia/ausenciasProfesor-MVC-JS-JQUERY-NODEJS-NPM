"use strict";

var gestor = new Gestor();
var loginManager = new LoginManager();
var peticionManager = new PeticionManager();

// SI EXISTE COOKIE
// RECOGE ID DE LOCALSTORAGE
// SI ID != NULL PIDE LOGIN A BD
function evalCookie(){
    if(gestor.existCookie()) {
        loginManager.getLogin(gestor.getLocal()["id"], '','evalCookieToken');
    }
}

// RECIBE RESULTADO LOGIN BD
// SI RECIBE EVALUA QUE TOKEN BD != TOKEN COOKIE
// SI NO SON IGUALES DESLOGUEA
function evalCookieToken(ressult){
    if(ressult.length != 0){
        let cookie = gestor.getCookie("token");
        let token = ressult[0]["token"];

        if(cookie != token){ changePageInicio(""); }
    }
    else { changePageInicio(""); }
}

// RECOGE ID LOCAL STORAGE
// BORRA LOCALSTORAGE
// LLAMA LOGIN - BORRA TOKEN
function returnLogin(){
    let id = gestor.getLocal()["id"];
    gestor.delLocal();
    loginManager.delToken(id, 'changePageInicio');
}

function changePageInicio(ressult){ window.location.assign("../index.html"); }

// RECOGE USUARIO LOCAL STORAGE
// AÑANE NOMBRE USUARIO A NAVEGADOR
// EVALUA NIVEL - LLAMA PETICIONES
// SI ES PROFESOR NO DEJA CAMBIAR NOMBRE BUSQUEDA
// SI ES ADMIN HABILITA ENLACE ACEPTARUSUARIOS
function getUsuarioLocal(){
    let usuario = gestor.getLocal();

    addUsuarioForm();

    if(usuario["nivel"] == 'admin'){ /* REDIRECT */ }
    else if(usuario["nivel"] == 'direccion'){ peticionManager.getPeticion('', 'getPeticionesCount'); }
    else if(usuario["nivel"] == 'profesor'){
        peticionManager.getPeticion('nombreSolicitante=' + usuario["nombre"], 'getPeticionesCount');
    }
}

// RECOGE USUARIO LOCAL STORAGE
// AÑANE NOMBRE USUARIO A NAVEGADOR
function addUsuarioForm(){
    let usuario = gestor.getLocal();
    injectUsuarioForm(usuario["nombre"].split(" ")[0]);
}

// RECIBE RESULTADO PETICIONES BD
// LAS RECORRE Y CUENTA CANTIDAD CADA UNA
// INJECTA EN NAV LA CANTIDAD DE CADA UNA
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

// EVALUA LOCALSTORAGE
// SI RECIBE PETICION - LLAMA PETICION BD
function iniFormGenPeticion(){
    if(gestor.getLocal()["idPeticion"] != ""){
        peticionManager.getPeticion("id=" + gestor.getLocal()["idPeticion"], 'formGetPeticion');
    }
}

// RECIBE RESULTADO PETICION BD
// SI NO HAY PETICIONES MUESTA ADVERTENCIA
// SI RECIBE INYECTA PETICIONES EN FORMULARIO
// RECOGE ACCION LOCAL STORAGE
// SI ES DETALLES DESAHIBILITA LA EDICION DEL FORMULARIO
function formGetPeticion(ressult){
    if(ressult.length == 0){ injectCaption("No hay documentos que mostrar"); }
    else {
        for(let i = 0; i < ressult.length; i++){
            let peticion = new Peticion(ressult[i]);
            gestor.addPeticiones(peticion);
        }
        injectFormPermiso(gestor.getPeticiones()[0]);
    }

    if( gestor.getLocal()["accion"] == "detalles"){
        disableFormGenPeticion();
    }
}