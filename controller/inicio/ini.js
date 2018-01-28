"use strict";

// CREA OBJETO DATE CON FECHA ACTUAL
// FORMATEA FECHA ACTUAL
// AÑADE MAXIMOS A CAMPOS DATE CON FECHA ACTUAL
function addMaxDates(){
    let ObjectDate = new Date();
    let mes = ObjectDate.getMonth() *1  +1;
    if(mes < 10){ mes = "" + "0" + mes; }

    let fechaActual = ObjectDate.getFullYear() + "-" + mes + "-" + ObjectDate.getDate();

    $("#buscador-fecha-creacion").attr("max", fechaActual);
    $("#buscador-fecha-llegada").attr("max", fechaActual);
}


function clearPetLocal(){ gestor.clearPeticionLocal(); }