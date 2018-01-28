"use strict";

document.onload = addEventsInicio();

function addEventsInicio(){
    evalCookie();
    getUsuarioLocal();
    clearPetLocal();
    getRegistros();
}

function addEventsRegistros(registros){
    for(let i = 0; i < registros.length; i++){
        $("#aceptar-" + registros[i].getId()).click(addRegistroLogin);
        $("#denegar-" + registros[i].getId()).click(delRegistroLogin);
    }
}