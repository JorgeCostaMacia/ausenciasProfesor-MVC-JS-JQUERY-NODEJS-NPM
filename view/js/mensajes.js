"use strict";

"use strict";

function msjDanger(text){
    let mensajes = document.getElementById("mensajes");

    let mssjNode = document.createElement('div');
    mssjNode.setAttribute('class', 'alert alert-danger');
    mssjNode.setAttribute('id', 'alert alert-danger');
    let strongNode = document.createElement('strong');
    let strongText = document.createTextNode(text);
    strongNode.appendChild(strongText);

    mssjNode.appendChild(strongNode);
    mensajes.appendChild(mssjNode);
}

function msjSucces(text){
    let mensajes = document.getElementById("mensajes");

    let mssjNode = document.createElement('div');
    mssjNode.setAttribute('class', 'alert alert-success');
    mssjNode.setAttribute('id', 'alert alert-success');
    let strongNode = document.createElement('strong');
    let strongText = document.createTextNode(text);
    strongNode.appendChild(strongText);

    mssjNode.appendChild(strongNode);
    mensajes.appendChild(mssjNode);
}

function msjInfo(text){
    let mensajes = document.getElementById("mensajes");

    let mssjNode = document.createElement('div');
    mssjNode.setAttribute('class', 'alert alert-info');
    mssjNode.setAttribute('id', 'alert alert-info');
    let strongNode = document.createElement('strong');
    let strongText = document.createTextNode(text);
    strongNode.appendChild(strongText);

    mssjNode.appendChild(strongNode);
    mensajes.appendChild(mssjNode);
}

function msjClean(){
    let mensajes = document.getElementById("mensajes");
    mensajes.innerHTML = "";
}

function addClassHome(){
    let mensajes = document.getElementById("mensajes");
    mensajes.setAttribute('class', 'container col-xs-12 col-sm-10 col-md-10 col-lg-10');
}