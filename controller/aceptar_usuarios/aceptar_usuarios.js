"use strict";

// gestor - loginManager - peticionManager - usuarioManager - registroManager

function addRegistroLogin(event){
    let inputName = event.target.id;
    let arrayId = inputName.split("-");
    let idRegistro = arrayId[1];

    let registro = gestor.getRegistro(idRegistro);

    loginManager.addLogin(registro.getId(), registro.getPass());
    usuarioManager.addUsuario(registro.getId(), registro.getNombre(), registro.getDepartamento(), registro.getNivel());
    registroManager.delRegistro(registro.getId());
    delTrRegistro('tr-' + registro.getId());
}

function delRegistroLogin(event){
    let inputName = event.target.id;
    let arrayId = inputName.split("-");
    let idRegistro = arrayId[1];

    registroManager.delRegistro(idRegistro);
    delTrRegistro('tr-' + idRegistro);
}

