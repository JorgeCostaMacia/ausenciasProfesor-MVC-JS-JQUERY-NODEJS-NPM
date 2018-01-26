"use strict";

function addEventsLogin(){
    if($("#logeo") != null ){
        addEventsformLogin();
        evalCookie();
        evalRegistroLocal();
    }
}

function addEventsformLogin(){ $("#submitLogin").click(evalLogin); }
