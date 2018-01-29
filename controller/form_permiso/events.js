"use strict";

document.onload = addEventsInicio();

function addEventsInicio(){
    $("#imprimirGenPeticion").click(function() { window.print(); });
    $("#enviarGenPeticion").click(evalGenPermiso);
    $("#guardarGenPeticion").click(evalGenPermiso);
    evalCookie();
    getUsuarioLocal();
    iniFormGenPeticion();
}