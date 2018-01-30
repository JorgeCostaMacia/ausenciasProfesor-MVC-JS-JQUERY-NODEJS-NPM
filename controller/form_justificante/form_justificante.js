"use strict";

// gestor - loginManager - peticionManager - logManager

function evalPermiso(event) {
    msjClean();

    let permiso = gestor.getPeticiones()[0];

    let peticion = {};
    peticion["idUsuario"] = permiso.getIdUsuario();
    peticion["cola"] = event.target.value;
    peticion["nombreSolicitante"] = $("#donya").val();
    peticion["comentarios"] = permiso.getComentarios();
    peticion["fechaCreacion"] = gestor.getDate();
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

    peticion["horario"] = gestor.getPeticiones()[0].getHorario();

    peticion["observaciones"] = $("#documentacion-observaciones").val();
    peticion["fechaFirma"] = $("#firma-anyo").val()+"-"+$("#firma-mes").val()+"-"+$("#firma-dia").val();
    peticion["firma"] = $("#firma-firma").val();
    peticion["firmaDireccion"] = $("#direccion-visto-firma").val();


    if( $("#tipoAusencia").prop("checked")){
        peticion["tipoAusencia"] = "ausencia";
    }
    else if( $("#tipoRetraso").prop("checked")){
        peticion["tipoAusencia"] = "retraso";
    }

    if( $("#motivoEnfermedad").prop("checked")){
        peticion["motivoAusencia"] = "enfermedad";
    }
    else if( $("#motivoPermiso").prop("checked")){
        peticion["motivoAusencia"] = "permiso";
    }

    peticion["horAusencias"] = {
        "lectivas": $("#horas-lectivas-ausencia").val(),
        "otras": $("#horas-otras-ausencia").val(),
        "complementarias": $("#horas-complementarias-ausencia").val(),
        "evaluacion": $("#horas-evaluacion-ausencia").val(),
        "claustro": $("#horas-claustro-ausencia").val(),
        "ccp": $("#horas-ccp-ausencia").val(),
        "consejo": $("#horas-consejo-ausencia").val(),
        "reunionDep": $("#horas-reunion-dep-ausencia").val(),
        "reunionTutores": $("#horas-reunion-tutores-ausencia").val()
    };


    let log = {};
    log["idUsuario"] = gestor.getLocal()["id"];
    log["nombre"] = gestor.getLocal()["nombre"];
    log["fecha"] = gestor.getDate();
    log["hora"] = gestor.getTime();
    log["colaInicio"] = permiso.getCola();
    log["colaDestino"] = event.target.value;

    gestor.addLogs(new Log(log));

    peticionManager.updatePeticion(peticion, gestor.getPeticiones()[0].getIdPeticion(), 'evalExistAnexo');
}

function aceptPermiso(){
    let peticion = { "fechaLlegada": gestor.getDate(), "cola": "ausenciaFinalizada"};

    peticionManager.updatePeticion(peticion, gestor.getPeticiones()[0].getIdPeticion(), 'updateLogOk');
}

function cancelPermiso(){
    let peticion = { "fechaLlegada": gestor.getDate(), "cola": "penJustificante"};

    peticionManager.updatePeticion(peticion, gestor.getPeticiones()[0].getIdPeticion(), 'updateLogCancel');
}

function updateLogOk(ressult){
    let log = {};
    log["idUsuario"] = gestor.getLocal()["id"];
    log["nombre"] = gestor.getLocal()["nombre"];
    log["fecha"] = gestor.getDate();
    log["hora"] = gestor.getTime();
    log["colaInicio"] = "penAutorizarJustificante";
    log["colaDestino"] = "ausenciaFinalizada";

    logManager.addLog(log, 'changePageIninicio');
}

function updateLogCancel(ressult){
    let log = {};
    log["idUsuario"] = gestor.getLocal()["id"];
    log["nombre"] = gestor.getLocal()["nombre"];
    log["fecha"] = gestor.getDate();
    log["hora"] = gestor.getTime();
    log["colaInicio"] = "penAutorizarJustificante";
    log["colaDestino"] = "penAutorizarJustificante";

    logManager.addLog(log, 'changePageIninicio');
}