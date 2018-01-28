"use strict";

function injectNombreCompletoDisable(nombre) {
    $("#buscador-texto").val(nombre);
    $("#buscador-texto").attr('disabled', 'disabled');
}

function injectCaption(text) {
    $("#caption").append(text);
}