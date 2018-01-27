"use strict";

function injectNombreCompletoDisable(nombre){
    $("#buscador-texto").attr('value',nombre);
    $("#buscador-texto").attr('disabled','disabled');
}