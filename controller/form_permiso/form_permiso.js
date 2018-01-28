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

    let horario = {};
    for(let i = 1; i < 9; i++){
        let dia = $("#horario-dia-" + i).val();
        let hora = $("#horario-hora-" + i).val();
        let curso = $("#horario-curso-" + i).val();
        let asignatura = $("#horario-asignatura-" + i).val();
        let sustituto = $("#horario-profesor-" + i).val();

        horario[i] = { "dia": dia, "hora": hora, "curso": curso, "asignatura": asignatura, "sustituto": sustituto };
    }

    let observaciones = $("#documentacion-observaciones").val();
    let fechaFirma = $("#firma-anyo").val()+"-"+$("#firma-mes").val()+"-"+$("#firma-dia").val();
    let firma = $("#firma-firma").val();
    let comentarios = [];
    let anexos = [];

    peticionManager.addPeticion(idusuario, cola, nombreSolicitante, fechaActual, fechaActual, motivo, JSON.stringify(jornada), JSON.stringify(horario), observaciones, fechaFirma, firma, JSON.stringify(comentarios), JSON.stringify(anexos));

}