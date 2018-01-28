"use strict";

document.onload = addEventsInicio();

function addEventsInicio(){
    $("#cerrarSesionInicio").click(changePageIndex);
    $("#generar-permiso").click(function() { window.location.assign("form_permiso.html"); } );
    evalCookie();
    getUsuarioLocal();
}