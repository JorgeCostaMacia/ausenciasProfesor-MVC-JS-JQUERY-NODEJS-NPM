"use strict";

// gestor - loginManager - registroManager

function evalRegistro(){
    msjClean();

    let id = $("#usuario").val();
    let pass = $("#pass").val();
    let pass2 = $("#repetir-pass").val();
    let nombre = $("#nombre").val();
    let departamento = $("#departamento").val();
    let nivel = $("#nivel").val();

    let errores = validateRegistro(id, pass, pass2, nombre, departamento);

    if(errores.length == 0){ loginManager.getLogin(id, '', 'checkExistLogin'); }
    else {
        let msjError = "";
        for(let i = 0; i < errores.length; i++){
            msjError += errores[i];
        }
        msjDanger('Registro', msjError);
    }

}

function checkExistLogin(ressult){
    msjClean();

    if(ressult.length > 0) { msjDanger('REGISTRO', '<strong>Existe un login con esa cuenta</strong>'); }
    else { registroManager.getRegistro("id=" + $("#usuario").val(), 'checkExistRegistro'); }
}

function checkExistRegistro(ressult){
    if(ressult.length > 0) { msjDanger('REGISTRO', '<strong>Existe un registro pendiente con esa cuenta</strong>'); }
    else {
        gestor.addLocal("", "", "", 'registro');

        registroManager.addRegistro($("#usuario").val(), gestor.stringBase64($("#pass").val()), $("#nombre").val(), $("#departamento").val(), $("#nivel").val(), 'changePageIndex');
    }
}