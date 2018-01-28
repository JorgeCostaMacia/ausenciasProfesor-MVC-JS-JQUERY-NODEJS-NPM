"use strict";

document.onload = addEventsInicio();

function addEventsInicio(){
    $("#cerrarSesionInicio").click(changePageIndex);
    evalCookie();
    getUsuarioLocal();
    addMaxDates();
    $("#buscar").click(evalSearch);
    clearPetLocal();
}

function eventPeticiones(peticiones){
    for(let i = 0; i < peticiones.length; i++){
        $("#comentarios-" + peticiones[i].getIdPeticion()).click(showComents);
        $("#detalles-" + peticiones[i].getIdPeticion()).click(handlerDetalles);
    }
}

function aceptarUsuarios(){
    $("#aceptarUsuarios").click(function(){ window.location.assign("aceptar_usuarios.html"); });
}