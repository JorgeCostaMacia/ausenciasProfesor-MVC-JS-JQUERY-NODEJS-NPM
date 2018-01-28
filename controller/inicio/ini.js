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

// CREA OBJETO DATE CON FECHA ACTUAL
// FORMATEA FECHA ACTUAL
// AÑADE MAXIMOS A CAMPOS DATE CON FECHA ACTUAL
function addMaxDates(){
    let ObjectDate = new Date();
    let mes = ObjectDate.getMonth() *1  +1;
    if(mes < 10){ mes = "" + "0" + mes; }

    let fechaActual = ObjectDate.getFullYear() + "-" + mes + "-" + ObjectDate.getDate();

    $("#buscador-fecha-creacion").attr("max", fechaActual);
    $("#buscador-fecha-llegada").attr("max", fechaActual);
}

// BORRA PETICIONES DE LOCALSTORAGE
function clearPetLocal(){ gestor.clearPeticionLocal(); }