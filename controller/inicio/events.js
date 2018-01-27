"use strict";

document.onload = addEventsInicio();

function addEventsInicio(){
    $("#cerrarSesionInicio").click(returnLogin);
    evalCookie();
    getUsuarioLocal();
    $("#buscar").click(evalSearch);
}