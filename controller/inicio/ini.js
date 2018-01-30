"use strict";

// CREA OBJETO DATE CON FECHA ACTUAL
// FORMATEA FECHA ACTUAL
// AÑADE MAXIMOS A CAMPOS DATE CON FECHA ACTUAL
function addMaxDates(){
    let fechaActual = gestor.getDate();

    $("#buscador-fecha-creacion").attr("max", fechaActual);
    $("#buscador-fecha-llegada").attr("max", fechaActual);
}