"use strict";

document.onload = addEventsInicio();

function addEventsInicio(){
    $("#cerrarSesionInicio").click(returnLogin);
    $("#imprimirGenPeticion").click(function() { window.print(); });
    $("#enviarGenPeticion").click(evalGenPermiso);
    $("#guardarGenPeticion").click(evalGenPermiso);
    evalCookie();
    getUsuarioLocal();
    iniFormGenPeticion();
}