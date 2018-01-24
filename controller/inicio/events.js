"use strict";

function addEventsInicio(){
    let cerrarSesionInicio = document.getElementById("cerrarSesionInicio");
    if(cerrarSesionInicio != null){
        addEventsInicio();
        evalCookie();
        addContent();
    }
}

function addEventsInicio(){
    let cerrarSesionInicio = document.getElementById("cerrarSesionInicio");

    if(cerrarSesionInicio != null){  cerrarSesionInicio.addEventListener("click", returnLogin); }
}
