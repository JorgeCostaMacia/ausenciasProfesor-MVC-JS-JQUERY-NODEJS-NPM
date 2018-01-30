"use strict";

document.onload = addEventsInicio();

function addEventsInicio(){
    $("#generar-permiso").click(changePageForm);
    $("#buscar-permisos").click(evalSearch);
    evalCookie();
    getUsuarioLocal();
    addMaxDates();
    clearPetLocal();
}

function eventPeticiones(peticiones){
    for(let i = 0; i < peticiones.length; i++){
        $("#comentarios-" + peticiones[i].getIdPeticion()).click(showComents);
        $("#detalles-" + peticiones[i].getIdPeticion()).click(handlerDetalles);
        $("#anexos-" + peticiones[i].getIdPeticion()).click(handlerAnexos);
    }
}