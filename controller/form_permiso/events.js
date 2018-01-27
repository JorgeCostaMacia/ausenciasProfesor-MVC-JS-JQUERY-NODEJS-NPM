"use strict";

document.onload = addEventsInicio();

function addEventsInicio(){
    $("#cerrarSesionInicio").click(returnLogin);
    $("#enviarGenPeticion").click(evalGenPermiso);
    evalCookie();
    getUsuarioLocal();
    iniFormGenPeticion();
}