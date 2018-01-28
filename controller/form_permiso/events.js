"use strict";

document.onload = addEventsInicio();

function addEventsInicio(){
    $("#cerrarSesionInicio").click(returnLogin);
    $("#enviarGenPeticion").click(evalGenPermiso);
    $("#imprimirGenPeticion").click(window.print());
    evalCookie();
    getUsuarioLocal();
    iniFormGenPeticion();
}