"use strict";

document.onload = addEventsInicio();

function addEventsInicio(){
    evalCookie();
    getUsuarioLocal();
    addMaxDates();
    $("#buscar-permisos").click(evalSearch);
    clearPetLocal();
}

function eventPeticiones(peticiones){
    for(let i = 0; i < peticiones.length; i++){
        $("#comentarios-" + peticiones[i].getIdPeticion()).click(showComents);
        $("#detalles-" + peticiones[i].getIdPeticion()).click(handlerDetalles);
        $("#anexos-" + peticiones[i].getIdPeticion()).click(handlerAnexos);
    }
}