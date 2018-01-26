"use strict";

document.onload = addEventsRegistro();

function addEventsRegistro(){
    $("#submitLogin").click(evalRegistro);
    evalCookie();
}