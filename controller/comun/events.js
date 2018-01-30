"use strict";

document.onload = addEventsComun();

function addEventsComun(){
    $("#cerrarSesionInicio").click(returnLogin);
   // $("#cerrarSesionInicio").click(getLogs); // boton log
}

function aceptarUsuarios(){
    $("#aceptarUsuarios").click(function(){ window.location.assign("aceptar_usuarios.html"); });
}