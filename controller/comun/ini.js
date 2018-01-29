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

        if(cookie != token){ changePageIndex(""); }
    }
    else { changePageIndex(""); }
}

// RECOGE ID LOCAL STORAGE
// BORRA LOCALSTORAGE
// LLAMA LOGIN - BORRA TOKEN
function returnLogin(){
    let id = gestor.getLocal()["id"];
    gestor.delLocal();
    loginManager.delToken(id, 'changePageIndex');
}

function changePageIndex(ressult){ window.location.assign("../index.html"); }
function changePageIninicio(ressult){ window.location.assign("inicio.html"); }

// RECOGE USUARIO LOCAL STORAGE
// AÑANE NOMBRE USUARIO A NAVEGADOR
// EVALUA NIVEL - LLAMA PETICIONES
// SI ES PROFESOR NO DEJA CAMBIAR NOMBRE BUSQUEDA
// SI ES ADMIN HABILITA ENLACE ACEPTARUSUARIOS
function getUsuarioLocal(){
    let usuario = gestor.getLocal();

    addUsuarioForm();

    if(usuario["nivel"] == 'admin'){
        aceptarUsuarios();
        peticionManager.getPeticion('', 'getPeticionesCount');
    }
    else if(usuario["nivel"] == 'direccion'){ peticionManager.getPeticion('', 'getPeticionesCount'); }
    else if(usuario["nivel"] == 'profesor'){
        peticionManager.getPeticion('nombreSolicitante=' + usuario["nombre"], 'getPeticionesCount');
        injectNombreCompletoDisable(usuario["nombre"]);
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

function clearPetLocal(){ gestor.clearPeticionLocal(); }

function aceptarUsuarios(){
    $("#aceptarUsuarios").click(function(){ window.location.assign("aceptar_usuarios.html"); });
}