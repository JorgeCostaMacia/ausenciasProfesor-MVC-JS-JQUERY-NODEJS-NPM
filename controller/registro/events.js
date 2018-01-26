"use strict";

document.onload = addEventsRegistro();

function addEventsRegistro(){
    addEventsformRegistro();
    evalCookie();
}

function addEventsformRegistro(){
    if($("#submitRegistro") != null ){ $("#submitLogin").click(evalRegistro); }
}
