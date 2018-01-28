"use strict";

document.onload = addEventsLogin();

function addEventsLogin(){
    $("#submitLogin").click(evalLogin);
    evalCookie();
    evalRegistroLocal();
}