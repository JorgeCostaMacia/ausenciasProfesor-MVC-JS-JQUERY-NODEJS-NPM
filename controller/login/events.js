"use strict";

function addEventsLogin(){
    let logeo = document.getElementById("logeo");
    if(logeo != null ){
        addEventsformLogin();
        evalCookie();
    }
}

function addEventsformLogin(){
    let submitLogin = document.getElementById("submitLogin");

    //let submitGetAccount = document.getElementById("submitGetAccount");
    //let submitRegistrar = document.getElementById("submitRegistrar");
    //let addLogin = document.getElementById("addLogin");

    submitLogin.addEventListener("click", evalLogin);

    //submitGetAccount.addEventListener("click", addformGetAccount);
    //submitRegistrar.addEventListener("click", evalformGetAccount);
    //addLogin.addEventListener("click", addformLogin);
}
