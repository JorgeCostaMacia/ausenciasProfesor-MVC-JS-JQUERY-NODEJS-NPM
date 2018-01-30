"use strict";

function msjDanger(accion, text){
    $("#mensajes").append(
        '<div class="modal fade bd-example-modal-lg" id="danger" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog modal-lg">' +
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
        '<div class="modal fade bd-example-modal-lg" id="warning" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog modal-lg">' +
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
        '<div class="modal fade bd-example-modal-lg" id="success" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog modal-lg">' +
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

    $("#success").modal("show");
}

function msjInfo(accion, text){
    $("#mensajes").append(
        '<div class="modal fade bd-example-modal-lg" id="info" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog modal-lg">' +
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

function msjLg(accion, text){
    $("#mensajes").append(
        '<div class="modal fade" id="modallg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog modal-lg">' +
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

    $("#modallg").modal("show");
}

function msjClean(){ $("#mensajes").empty(); }

function formatLogTable(logs){
    let logText = '<table class="table table-hover">' +
        "<thead>" +
        "<tr>" +
        "<td>ID USUARIO</td><td>NOMBRE</td><td>FECHA</td><td>HORA</td><td>INICIO</td><td>FIN</td>" +
        "</tr>" +
        '</thead>' +
        '<tbody>';

    for(let i = 0; i < logs.length; i++) {
        logText += '<tr>' +
            "<td>" + logs[i]["idUsuario"] + "</td>" +
            "<td>" + logs[i]["nombre"] + "</td>" +
            "<td>" + logs[i]["fecha"] + "</td>" +
            "<td>" + logs[i]["hora"] + "</td>" +
            "<td>" + logs[i]["colaInicio"] + "</td>" +
            "<td>" + logs[i]["colaDestino"] + "</td>" +
            "</tr>";
    }

    logText += "</tbody></table>";

    msjInfo("LOGS", logText);
}



function msjLogs(){
    
}
