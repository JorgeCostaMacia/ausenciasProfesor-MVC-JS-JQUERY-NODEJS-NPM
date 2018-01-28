"use strict";

// gestor - loginManager - registroManager

// LIMPIA MENSAJES
// RECOGDE ID PASS PASS2 NOMBRE DEPARTAMENTO DE FORMULARIO
// LOS EVALUA
// SI NO SON CORRECTOS MUESTRA ADVERTENCIA
// SI SON ERRORES LLAMA BD LOGIN
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

// RECIBE RESULTADO LOGIN BD
// LIMPIA MENSAJES
// SI NO RECIBE LLAMA BD REGISTRO
// SI RECIBE MUESTRA ADVERTENCIA
function checkExistLogin(ressult){
    msjClean();

    if(ressult.length > 0) { msjDanger('REGISTRO', '<strong>Existe un login con esa cuenta</strong>'); }
    else { registroManager.getRegistro("id=" + $("#usuario").val(), 'checkExistRegistro'); }
}

// RECIBE RESULTADO REGISTRO BD
// SI NO RECIBE LLAMA BD REGISTRO
// SI RECIBE MUESTRA ADVERTENCIA
function checkExistRegistro(ressult){
    if(ressult.length > 0) { msjDanger('REGISTRO', '<strong>Existe un registro pendiente con esa cuenta</strong>'); }
    else {
        gestor.addLocal("", "", "", 'registro');

        let registro = {};
        registro["id"] = $("#usuario").val();
        registro["pass"] = gestor.stringBase64($("#pass").val());
        registro["nombre"] = $("#nombre").val();
        registro["departamento"] = $("#departamento").val();
        registro["nivel"] = $("#nivel").val();

        registroManager.addRegistro(registro, 'changePageIndex');
    }
}