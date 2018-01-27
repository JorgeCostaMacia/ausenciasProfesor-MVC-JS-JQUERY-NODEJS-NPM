"use strict";

function msjDanger(accion, text){
    $("#mensajes").append(
        '<div class="modal fade" id="danger" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header modal-header-danger">' +
        '<h1>' + accion +'</h1>' +
        '</div>' +
        '<div class="modal-body">' + text + '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-default pull-rigth" data-dismiss="modal">Close</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );

    $("#danger").modal("show");
}

function msjWarning(accion, text){
    $("#mensajes").append(
        '<div class="modal fade" id="warning" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header modal-header-warning">' +
        '<h1>' + accion +'</h1>' +
        '</div>' +
        '<div class="modal-body">' + text + '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-default pull-rigth" data-dismiss="modal">Close</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );

    $("#warning").modal("show");
}

function msjSucces(accion, text){
    $("#mensajes").append(
        '<div class="modal fade" id="success" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header modal-header-success">' +
        '<h1>' + accion +'</h1>' +
        '</div>' +
        '<div class="modal-body">' + text + '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-default pull-rigth" data-dismiss="modal">Close</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );

    $("#succes").modal("show");
}

function msjInfo(accion, text){
    $("#mensajes").append(
        '<div class="modal fade" id="info" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header modal-header-info">' +
        '<h1>' + accion +'</h1>' +
        '</div>' +
        '<div class="modal-body">' + text + '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-default pull-rigth" data-dismiss="modal">Close</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );

    $("#info").modal("show");
}

function msjClean(){ $("#mensajes").empty(); }