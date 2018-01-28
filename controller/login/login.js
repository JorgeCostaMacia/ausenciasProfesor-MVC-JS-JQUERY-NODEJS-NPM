"use strict";

// gestor - loginManager - usuarioManager

// LIMPIA MENSAJES
// RECOGDE ID PASS DE FORMULARIO
// LOS EVALUA
// SI NO SON CORRECTOS MUESTRA ADVERTENCIA
// SI SON ERRORES LLAMA BD LOGIN
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

// RECIBE RESULTADO LOGIN BD
// LIMPIA MENSAJES
// SI RECIBE AÑADE OBJETO LOGIN A GESTOR - LLAMA BD USUARIOS
// SI NO RECIBE MUESTRA ADVERTENCIA
function checkExistLogin(ressult) {
    msjClean();

    if (ressult.length > 0) {
        gestor.addLogins(new Login(ressult[0]["id"], ressult[0]["pass"], ressult[0]["token"]));
        usuarioManager.getUsuario(ressult[0]["id"], 'addUsuarioLocal');
    }
    else { msjDanger('LOGIN', '<strong>No existe el usuario o la contraseña es erronea</strong>'); }
}

// RECIBE RESULTADO USUARIOS BD
// LIMPIA MENSAJES
// AÑADE OBJETO USUARIO A GESTOR
// GENERA TOKEN - AGREGA VALORES LOCAL STORAGE - GENERA COOKIE
// LLAMA BD LOGIN
function addUsuarioLocal(ressult){
    msjClean();

    gestor.addUsuarios(new Usuario(ressult[0]["id"], ressult[0]["nombre"], ressult[0]["nivel"]));

    let token = gestor.genToken();
    gestor.addLocal(ressult[0]["id"], ressult[0]["nombre"], ressult[0]["nivel"], "");
    gestor.addCookie('token', token, 300000);

    loginManager.addToken(ressult[0]["id"], token, 'changePageInicio');
}

// RECIBE RESULTADO LOGIN BD
// REDIRIGE PAG INICIO
function changePageInicio(ressult){
    window.location.assign("view/inicio.html");
}
