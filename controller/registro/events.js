"use strict";

function addEventsLogin(){
    if($("#registro") != null ){
        addEventsformRegistro();
        evalCookie();
    }
}

function addEventsformRegistro(){ $("#submitRegistro").click(evalRegistro); }
