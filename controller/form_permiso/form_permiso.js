"use strict";

// gestor - loginManager - peticionManager - logManager

function evalGenPermiso(event) {
    msjClean();

    let permiso = gestor.getPeticiones()[0];

    let peticion = {};
    peticion["idUsuario"] = gestor.getLocal()["id"];
    peticion["cola"] = event.target.value;
    peticion["nombreSolicitante"] = $("#donya").val();

    if(peticion.getCola() == "penAutorizarPermiso"){
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

    let log = {};
    log["id"] = gestor.getLocal()["id"];
    log["nombre"] = gestor.getLocal()["nombre"];
    log["fecha"] = gestor.getDate();
    log["hora"] = gestor.getTime();
    log["colaInicio"] = "genPeticion";
    log["colaDestino"] = event.target.value;

    gestor.addLogs(new Log(log));

    peticionManager.addPeticion(peticion, 'addLog');msjClean();

    let permiso = gestor.getPeticiones()[0];

    let peticion = {};
    peticion["idUsuario"] = gestor.getLocal()["id"];
    peticion["cola"] = event.target.value;
    peticion["nombreSolicitante"] = $("#donya").val();

    if(peticion.getCola() == "penAutorizarPermiso"){
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

    let log = {};
    log["id"] = gestor.getLocal()["id"];
    log["nombre"] = gestor.getLocal()["nombre"];
    log["fecha"] = gestor.getDate();
    log["hora"] = gestor.getTime();
    log["colaInicio"] = "genPeticion";
    log["colaDestino"] = event.target.value;

    gestor.addLogs(new Log(log));

    peticionManager.addPeticion(peticion, 'addLog');
}