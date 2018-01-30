"use strict";

document.onload = addEventsInicio();

function addEventsInicio(){
    $("#buscar-ausencias").click(evalSearch);
    evalCookie();
    getUsuarioLocal();
    addMaxDates();
    clearPetLocal();
}

function eventPeticiones(peticiones){
    for(let i = 0; i < peticiones.length; i++){
        $("#comentarios-" + peticiones[i].getIdPeticion()).click(showComents);
        $("#permisos-" + peticiones[i].getIdPeticion()).click(handerPermisos);
        $("#justificantes-" + peticiones[i].getIdPeticion()).click(handlerJustificantes);
        $("#anexos-" + peticiones[i].getIdPeticion()).click(handlerAnexos);
    }
}