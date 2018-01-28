"use strict";

document.onload = addEventsInicio();

function addEventsInicio(){
    $("#cerrarSesionInicio").click(changePageIndex);
    $("#imprimirGenPeticion").click(function() { window.print(); });
    $("#enviarGenPeticion").click(evalGenPermiso);
    $("#guardarGenPeticion").click(evalGenPermiso);
    evalCookie();
    getUsuarioLocal();
    iniFormGenPeticion();
}