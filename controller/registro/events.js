"use strict";

document.onload = addEventsRegistro();

function addEventsRegistro(){
    $("#submitRegistro").click(evalRegistro);
    evalCookie();
}