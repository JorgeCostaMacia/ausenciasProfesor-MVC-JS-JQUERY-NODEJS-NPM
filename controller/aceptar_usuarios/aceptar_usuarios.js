"use strict";

// gestor - loginManager - peticionManager - usuarioManager - registroManager


// RECIBE EVENTO QUE LO ACCIONA
// SACA ID REGISTRO DEL BOTON QUE LO ACCIONA
// OBTIENE REGISTRO DE GESTOR
// AÑADE LOGIN BD - USUARIO BD
// ELIMINA REGISTRO BD - QUITA REGISTRO DE FORMULARIO
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

// RECIBE EVENTO QUE LO ACCIONA
// SACA ID REGISTRO DEL BOTON QUE LO ACCIONA
// ELIMINA REGISTRO BD - QUITA REGISTRO DE FORMULARIO
function delRegistroLogin(event){
    let inputName = event.target.id;
    let arrayId = inputName.split("-");
    let idRegistro = arrayId[1];

    registroManager.delRegistro(idRegistro);
    delTrRegistro('tr-' + idRegistro);
}

