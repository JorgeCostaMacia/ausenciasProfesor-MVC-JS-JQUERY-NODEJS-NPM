"use strict";

function addEventsLogin(){
    if($("#logeo") != null ){
        addEventsformLogin();
        evalCookie();
        evalRegistroLocal();
    }
}

function addEventsformLogin(){
    $("#submitLogin").click(evalLogin);

    //let submitGetAccount = document.getElementById("submitGetAccount");
    //let submitRegistrar = document.getElementById("submitRegistrar");
    //let addLogin = document.getElementById("addLogin");


    //submitGetAccount.addEventListener("click", addformGetAccount);
    //submitRegistrar.addEventListener("click", evalformGetAccount);
    //addLogin.addEventListener("click", addformLogin);
}
function addEventsformLogin(){ $("#submitLogin").click(evalLogin); }
