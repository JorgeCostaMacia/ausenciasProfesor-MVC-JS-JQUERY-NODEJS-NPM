"use strict";

// gestor - loginManager - peticionManager

function evalGenPermiso(event) {
    msjClean();
    let id = "";

    let idusuario = gestor.getLocal().id;

    let nombreSolicitante = $("#donya").val();

    let cola = event.target.value;

    let fechaActual = new Date();
    let mes = fechaActual.getMonth() * 1 + 1;
    if (mes < 10) mes = "" + "0" + mes;
    fechaActual = fechaActual.getFullYear() + "-" + (mes) + "-" + fechaActual.getDate();


    let motivo = $("input[name=motivo-permiso]:checked").val();


    let jornada = {
        "completa": {
            "diaInicio": "" + $("#completa-fecha-desde").val(),
            "diaFin": "" + $("#completa-fecha-hasta").val(),
        },
        "parcial": {
            "diaInicio": "" + $("#incompleta-fecha-desde").val(),
            "diaFin": "" + $("#incompleta-fecha-hasta").val(),
            "horaInicio": "" + $("#incompleta-hora-desde").val(),
            "horaFin": "" + $("#incompleta-hora-hasta").val(),
        }
    };

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

}

