"use strict";

function addLog(ressult){
    msjClean();

    let logObjetc = gestor.getLogs()[0];

    let log = {};
    log["idUsuario"] = logObjetc.getIdUsuario();
    log["nombre"] = logObjetc.getNombre();
    log["fecha"] = logObjetc.getFecha();
    log["hora"] = logObjetc.getHora();
    log["colaInicio"] = logObjetc.getColaInicio();
    log["colaDestino"] = logObjetc.getColaDestino();

    logManager.addLog(log, 'changePageIninicio');
}

function addComment(){
    gestor.getPeticiones()[0].addComentarios($("#comentario-texto").val());
    peticionManager.addComent({ "comentarios": gestor.getPeticiones()[0].getComentarios() }, gestor.getLocal()["idPeticion"], 'addComentariosPeticion');
}

function addComentariosPeticion(ressult) {
    msjSucces('COMENTARIO', '<strong>Añadido comentario correctament</strong>');
}