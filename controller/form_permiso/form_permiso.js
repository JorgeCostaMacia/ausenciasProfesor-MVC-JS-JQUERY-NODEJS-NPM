"use strict";

// gestor - loginManager - peticionManager

function evalGenPermiso(event){
    let tableDestinaction = event.target.value;

    msjClean();

    msjClean();
    let id = "";
    let idusuario = gestor.getLocal().id;

    let nombre = $("#donya").val();

    let cola = event.target.value;

    let nombreSolicitante = gestor.getLocal().nombre;

    let fechaActual = new Date();
    fechaActual = fechaActual.getFullYear() + "-" + (fechaActual.getMonth() *1 +1) + "-" + fechaActual.getDate();

    let fechaLlegada = "";

    let motivo = $("input[name=motivo-permiso]:checked").val();

    //let jornada =

    
}

