"use strict";

document.onload = addEventsInicio();

function addEventsInicio(){
    $("#cerrarSesionInicio").click(returnLogin);
    evalCookie();
    getUsuarioLocal();
    clearPetLocal();
    getRegistros();
}

function addEventsRegistors(registros){
    for(let i = 0; i < registros.length; i++){
        $("#aceptar-" + registros[i].getId()).click(addRegistroLogin);
        $("#denegar-" + registros[i].getId()).click(delRegistroLogin);
    }
}

function aceptarUsuarios(){
    $("#aceptarUsuarios").click(function(){ window.location.assign("aceptar_usuarios.html"); });
}