"use strict";

// gestor - loginManager - peticionManager

function evalGenPermiso(event) {
    msjClean();

    let peticion = {};
    peticion["idUsuario"] = gestor.getLocal()["id"];
    peticion["nombreSolicitante"] = $("#donya").val();
    peticion["cola"] = event.target.value;
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
    peticion["comentarios"] = [];
    peticion["anexos"] = [];


    let fechaActual = new Date();
    let mes = fechaActual.getMonth() * 1 + 1;
    if (mes < 10) mes = "" + "0" + mes;
    fechaActual = fechaActual.getFullYear() + "-" + (mes) + "-" + fechaActual.getDate();


    peticionManager.addPeticion(peticion);
}