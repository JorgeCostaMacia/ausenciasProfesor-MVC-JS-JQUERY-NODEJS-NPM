"use strict";

// gestor - loginManager - usuarioManager

function evalLogin(){
    msjClean();

    let loginId = $("#usuario").val();
    let loginPass = $("#pass").val();

    let errores = validateLogin(loginId, loginPass);

    if(errores.length == 0){ loginManager.getLogin(loginId, gestor.stringBase64(loginPass), 'checkExistLogin'); }
    else {
        let msjError = "";
        for(let i = 0; i < errores.length; i++){
            msjError += errores[i];
        }
        msjDanger('LOGIN', msjError);
    }
}

function checkExistLogin(ressult) {
    msjClean();

    if (ressult.length > 0) {
        gestor.addLogins(new Login(ressult[0]["id"], ressult[0]["pass"], ressult[0]["token"]));
        usuarioManager.getUsuario(ressult[0]["id"], 'addUsuarioLocal');
    }
    else { msjDanger('LOGIN', '<strong>No existe el usuario o la contraseña es erronea</strong>'); }
}

function addUsuarioLocal(ressult){
    msjClean();

    gestor.addUsuarios(new Usuario(ressult[0]["id"], ressult[0]["nombre"], ressult[0]["nivel"]));

    let token = gestor.genToken();
    gestor.addLocal(ressult[0]["id"], ressult[0]["nombre"], ressult[0]["nivel"], "");
    gestor.addCookie('token', token, 300000);

    loginManager.addToken(ressult[0]["id"], token, 'changePageInicio');
}

function changePageInicio(ressult){
    window.location.assign("view/inicio.html");
}
