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

        console.log(errores);
    if(errores.length == 0){ loginManager.getLogin(id, '', 'checkExistLogin'); }
}

function checkExistLogin(ressult){
    msjClean();

    if(ressult.length > 0) { msjDanger('No se puede dar de alta - Existe el usuario'); }
    else { registroManager.getRegistro($("#usuario").val(), 'checkExistRegistro'); }
}

function checkExistRegistro(ressult){
    if(ressult.length > 0) { msjDanger('No se puede dar de alta - Existe el un registro pendiente con esa cuenta'); }
    else {
        gestor.addLocal("", "", "", 'registro');

        registroManager.addRegistro($("#usuario").val(), gestor.stringBase64($("#pass").val()), $("#nombre").val(), $("#departamento").val(), $("#nivel").val(), 'changePageIndex');
    }
}