"use strict";

// gestor - loginManager - peticionManager

function evalGenPermiso(event) {
    msjClean();
    let id = "";

    let idusuario = gestor.getLocal().id;

    let nombre = $("#donya").val();

    let cola = event.target.value;

    let nombreSolicitante = gestor.getLocal().nombre;

    let fechaActual = new Date();
    let mes = fechaActual.getMonth() * 1 + 1;
    if (mes < 10) mes = "" + "0" + mes;
    fechaActual = fechaActual.getFullYear() + "-" + (mes) + "-" + fechaActual.getDate();


    let motivo = $("input[name=motivo-permiso]:checked").val();


    let jornada = {
        "completa": {
            "diaInicio":""+$("#completa-fecha-desde").val(),
            "diaFin":""+$("#completa-fecha-hasta").val(),
        },
        "parcial": {
            "diaInicio":""+$("#incompleta-fecha-desde").val(),
            "diaFin":""+$("#incompleta-fecha-hasta").val(),
            "horaInicio":""+$("#incompleta-hora-desde").val(),
            "horaFin":""+$("#incompleta-hora-hasta").val(),
        }
    }

    peticionManager.addPeticion(idusuario, cola, nombreSolicitante, fechaActual, fechaActual, motivo,)

}

