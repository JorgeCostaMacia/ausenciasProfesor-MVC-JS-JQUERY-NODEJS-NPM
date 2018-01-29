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

    let horario = {
        "1": {
            "dia": "" + $("#horario-dia-1").val(),
            "hora": "" + $("#horario-hora-1").val(),
            "curso": "" + $("#horario-curso-1").val(),
            "asignatura": "" + $("#horario-asignatura-1").val(),
            "sustituto": "" + $("#horario-profesor-1").val()
        },
        "2": {
            "dia": "" + $("#horario-dia-2").val(),
            "hora": "" + $("#horario-hora-2").val(),
            "curso": "" + $("#horario-curso-2").val(),
            "asignatura": "" + $("#horario-asignatura-2").val(),
            "sustituto": "" + $("#horario-profesor-2").val()
        },
        "3": {
            "dia": "" + $("#horario-dia-3").val(),
            "hora": "" + $("#horario-hora-3").val(),
            "curso": "" + $("#horario-curso-3").val(),
            "asignatura": "" + $("#horario-asignatura-3").val(),
            "sustituto": "" + $("#horario-profesor-3").val()
        },
        "4": {
            "dia": "" + $("#horario-dia-4").val(),
            "hora": "" + $("#horario-hora-4").val(),
            "curso": "" + $("#horario-curso-4").val(),
            "asignatura": "" + $("#horario-asignatura-4").val(),
            "sustituto": "" + $("#horario-profesor-4").val()
        },
        "5": {
            "dia": "" + $("#horario-dia-5").val(),
            "hora": "" + $("#horario-hora-5").val(),
            "curso": "" + $("#horario-curso-5").val(),
            "asignatura": "" + $("#horario-asignatura-5").val(),
            "sustituto": "" + $("#horario-profesor-5").val()
        },
        "6": {
            "dia": "" + $("#horario-dia-6").val(),
            "hora": "" + $("#horario-hora-6").val(),
            "curso": "" + $("#horario-curso-6").val(),
            "asignatura": "" + $("#horario-asignatura-6").val(),
            "sustituto": "" + $("#horario-profesor-6").val()
        },
        "7": {
            "dia": "" + $("#horario-dia-7").val(),
            "hora": "" + $("#horario-hora-7").val(),
            "curso": "" + $("#horario-curso-7").val(),
            "asignatura": "" + $("#horario-asignatura-7").val(),
            "sustituto": "" + $("#horario-profesor-7").val()
        },
        "8": {
            "dia": "" + $("#horario-dia-8").val(),
            "hora": "" + $("#horario-hora-8").val(),
            "curso": "" + $("#horario-curso-8").val(),
            "asignatura": "" + $("#horario-asignatura-8").val(),
            "sustituto": "" + $("#horario-profesor-8").val()
        }

    };

    let observaciones = $("#documentacion-observaciones").val();
    let fechaFirma = $("#firma-anyo").val()+"-"+$("#firma-mes").val()+"-"+$("#firma-dia").val();
    let firma = $("#firma-firma").val();
    let comentarios = [];
    let anexos = [];

    peticionManager.addPeticion(idusuario, cola, nombreSolicitante, fechaActual, fechaActual, motivo, jornada, horario, observaciones, fechaFirma, firma, comentarios, anexos);
=======
function addLog(ressult){
    msjClean();

    gestor.addLogs(new Log(log));

    peticionManager.addPeticion(peticion, 'addLog');
}