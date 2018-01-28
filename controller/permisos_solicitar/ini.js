"use strict";

function addMaxDates(){
    let fechaActual = gestor.getDate();

    $("#buscador-fecha-creacion").attr("max", fechaActual);
    $("#buscador-fecha-llegada").attr("max", fechaActual);
}
