"use strict";

// gestor - loginManager - peticionManager - logManager

function evalGenPermiso(event) {
    msjClean();

    let permiso = gestor.getPeticiones()[0];

    let peticion = {};
    peticion["idUsuario"] = gestor.getLocal()["id"];
    peticion["cola"] = event.target.value;
    peticion["nombreSolicitante"] = $("#donya").val();

    if(gestor.getLocal()["accion"] == "detalles"){
        peticion["comentarios"] = permiso.getComentarios();
        peticion["anexos"] = permiso.getAnexos();
        peticion["fechaCreacion"] = permiso.getFechaCreacion();
    }
    else{
        peticion["comentarios"] = [];
        peticion["anexos"] = [];
        peticion["fechaCreacion"] = gestor.getDate();
    }

    peticion["fechaLlegada"] = gestor.getDate();
    peticion["motivo"] = $("input[name=motivo-permiso]:checked").val();
    peticion["motivoRepresentativas"] = $("#valor-funciones-representativas").val();
    peticion["motivoInexcusable"] = $("#valor-deber-inexcusable").val();

    peticion["jornada"] = {
        "completa": {
            "diaInicio": $("#completa-fecha-desde").val(),
            "diaFin": $("#completa-fecha-hasta").val(),
        },
        "parcial": {
            "diaInicio": $("#incompleta-fecha-desde").val(),
            "diaFin": $("#incompleta-fecha-hasta").val(),
            "horaInicio": $("#incompleta-hora-desde").val(),
            "horaFin": $("#incompleta-hora-hasta").val(),
        }
    };

    peticion["horario"] = {};
    for(let i = 1; i < 9; i++){
        peticion["horario"][i] = {
            "dia": $("#horario-dia-" + i).val(),
            "hora": $("#horario-hora-" + i).val(),
            "curso": $("#horario-curso-" + i).val(),
            "asignatura": $("#horario-asignatura-" + i).val(),
            "sustituto": $("#horario-profesor-" + i).val(),
        };
    }

    peticion["observaciones"] = $("#documentacion-observaciones").val();
    peticion["fechaFirma"] = $("#firma-anyo").val()+"-"+$("#firma-mes").val()+"-"+$("#firma-dia").val();
    peticion["firma"] = $("#firma-firma").val();

    peticion["tipoAusencia"] = "";
    peticion["motivoAusencia"] = "";
    peticion["motivoAusencia"] = {
        "lectivas": "", "otras": "", "complementarias": "","evaluacion": "", "claustro": "", "ccp": "",
        "consejo": "", "reunionDep": "", "reunionTutores": ""
    };

    let log = {};
    log["id"] = gestor.getLocal()["id"];
    log["nombre"] = gestor.getLocal()["nombre"];
    log["fecha"] = gestor.getDate();
    log["hora"] = gestor.getTime();
    log["colaInicio"] = "genPeticion";
    log["colaDestino"] = event.target.value;

    gestor.addLogs(new Log(log));

    if(gestor.getLocal()["idPeticion"] != ""){
        peticionManager.updatePeticion(peticion, gestor.getPeticiones()[0].getIdPeticion(), 'updateLogCancel');
    }
    else { peticionManager.addPeticion(peticion, 'addLog'); }
}

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

function aceptPermiso(){
    let peticion = { "fechaLlegada": gestor.getDate(), "cola": "penJustificante"};
    console.log(gestor.getPeticiones()[0].getIdPeticion());
    peticionManager.updatePeticion(peticion, gestor.getPeticiones()[0].getIdPeticion(), 'updateLogOk');
}

function cancelPermiso(){
    let peticion = { "fechaLlegada": gestor.getDate(), "cola": "genPermiso"};

    peticionManager.updatePeticion(peticion, gestor.getPeticiones()[0].getIdPeticion(), 'updateLogCancel');
}

function updateLogOk(ressult){
    let log = {};
    log["idUsuario"] = gestor.getLocal()["id"];
    log["nombre"] = gestor.getLocal()["nombre"];
    log["fecha"] = gestor.getDate();
    log["hora"] = gestor.getTime();
    log["colaInicio"] = "penAutorizarPermiso";
    log["colaDestino"] = "penJustificante";

    logManager.addLog(log, 'changePageIninicio');
}

function updateLogCancel(ressult){
    let log = {};
    log["idUsuario"] = gestor.getLocal()["id"];
    log["nombre"] = gestor.getLocal()["nombre"];
    log["fecha"] = gestor.getDate();
    log["hora"] = gestor.getTime();
    log["colaInicio"] = "penAutorizarPermiso";
    log["colaDestino"] = "genPermiso";

    logManager.addLog(log, 'changePageIninicio');
}