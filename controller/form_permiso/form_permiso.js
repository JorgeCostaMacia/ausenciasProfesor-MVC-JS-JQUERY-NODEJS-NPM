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

    let fechaLlegada = "";

    let motivo = $("input[name=motivo-permiso]:checked").val();

    //let jornada =


}

