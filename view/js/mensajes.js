"use strict";

function msjDanger(text){
    $("#mensajes").append(
        '<div id="alert alert-danger" class="alert alert-danger">' +
        '<strong>' + text + '</strong>' +
        '</div>'
    );
}

function msjSucces(text){
    $("#mensajes").append(
        '<div id="alert alert-success" class="alert alert-success">' +
        '<strong>' + text + '</strong>' +
        '</div>'
    );
}

function msjInfo(text){
    $("#mensajes").append(
        '<div id="alert alert-info" class="alert alert-info">' +
        '<strong>' + text + '</strong>' +
        '</div>'
    );
}

function msjClean(){ $("#mensajes").empty(); }

function addClassHome(){ $("#mensajes").attr('class', 'container col-xs-12 col-sm-10 col-md-10 col-lg-10'); }