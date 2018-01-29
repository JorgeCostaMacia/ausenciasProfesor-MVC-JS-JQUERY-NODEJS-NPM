"use strict";

function injectRegistros(registros) {
    for (let i = 0; i < registros.length; i++) {
        $("#tbody").append(
            '<tr id="tr-' + registros[i].getId() + '">' +
            '<td>' + registros[i].getId() + '</td>' +
            '<td>' + registros[i].getNombre() + '</td>' +
            '<td>' + registros[i].getDepartamento() + '</td>' +
            '<td>' + registros[i].getNivel() + '</td>' +
            '<td>' +
            '<div class="d-flex">' +
            '<button id="aceptar-' + registros[i].getId() + '" class="btn btn-success btn-sm text-uppercase mr-3">Aceptar</button>' +
            '<button id="denegar-' + registros[i].getId() + '" class="btn btn-danger btn-sm text-uppercase">Rechazar</button>' +
            '</div>' +
            '</td>' +
            '</tr>'
        );
    }
}

function delTrRegistro(idTr) {
    $('#' + idTr).remove();
}