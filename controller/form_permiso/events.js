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

function addEventsComentarios(){
    $("#agregarComentario").click(addComment);
    $("#aceptarPermiso").click(aceptPermiso);
    $("#denegarPermiso").click(cancelPermiso);
}