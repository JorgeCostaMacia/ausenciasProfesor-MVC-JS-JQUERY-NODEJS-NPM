"use strict";

document.onload = addEventsLogin();

function addEventsLogin(){
    addEventsformLogin();
    evalCookie();
    evalRegistroLocal();
}

function addEventsformLogin(){ $("#submitLogin").click(evalLogin); }