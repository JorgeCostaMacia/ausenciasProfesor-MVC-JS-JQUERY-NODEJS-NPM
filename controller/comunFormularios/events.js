"use strict";

document.onload = addEventsComun();

function addEventsComun(){
    $("#imprimirPeticion").click(function() { window.print(); });
    $("#enviarPeticion").click(evalPermiso);
    $("#guardarPeticion").click(evalPermiso);
    evalCookie();
    getUsuarioLocal();
    iniFormPeticion();
}

function addEventsComentarios(){
    $("#agregarComentario").click(addComment);
    $("#aceptarPermiso").click(aceptPermiso);
    $("#denegarPermiso").click(cancelPermiso);
}