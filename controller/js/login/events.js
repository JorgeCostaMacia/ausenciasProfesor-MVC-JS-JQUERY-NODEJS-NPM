"use strict";

function addEventsLogin(){
    let formLogin = document.getElementById("formLogin");
    if(formLogin != null ){ addEventsformLoginGetAccount(); }
}

function addEventsformLoginGetAccount(){
    let submitLogin = document.getElementById("submitLogin");
    let submitGetAccount = document.getElementById("submitGetAccount");
    let submitRegistrar = document.getElementById("submitRegistrar");
    let addLogin = document.getElementById("addLogin");

    submitLogin.addEventListener("click", evalformLogin);
    submitGetAccount.addEventListener("click", addformGetAccount);
    submitRegistrar.addEventListener("click", evalformGetAccount);
    addLogin.addEventListener("click", addformLogin);
}
