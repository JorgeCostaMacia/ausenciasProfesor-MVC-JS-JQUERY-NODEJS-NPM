"use strict";

function cleanTable() {
    $("#tbody").empty();
}

function injectPeticiones(peticiones) {
    for (let i = 0; i < peticiones.length; i++) {
        let fechaAux = peticiones[i].getFechaCreacion().split("-");
        let fechaCreacion = fechaAux[2] + "/" + fechaAux[1] + "/" + fechaAux[0];
        fechaAux = peticiones[i].getFechaLlegada().split("-");
        let fechaLlegada = fechaAux[2] + "/" + fechaAux[1] + "/" + fechaAux[0];

        $("#tbody").append(
            '<tr>' +
            '<td>' + peticiones[i].getNombreSolicitante() + '</td>' +
            '<td>' + fechaCreacion + '</td>' +
            '<td>' + fechaLlegada + '</td>' +
            '<td><div id="comentarios-' + peticiones[i].getIdPeticion() + '" class="link">' + peticiones[i].getComentarios().length + '</div></td>' +
            '<td><div id="detalles-' + peticiones[i].getIdPeticion() + '" class="link">Detalles</div></td>' +
            '</tr>'
        );
    }
}

$(document).ready(function () {
    'use strict';

    // UPLOAD CLASS DEFINITION
    // ======================

    var dropZone = document.getElementById('drop-zone');
    var uploadForm = document.getElementById('js-upload-form');

    var startUpload = function (files) {
        console.log(files)
    }

    uploadForm.addEventListener('submit', function (e) {
        var uploadFiles = document.getElementById('js-upload-files').files;
        e.preventDefault()

        startUpload(uploadFiles)
    })

    dropZone.ondrop = function (e) {
        e.preventDefault();
        this.className = 'upload-drop-zone';

        startUpload(e.dataTransfer.files)
    }

    dropZone.ondragover = function () {
        this.className = 'upload-drop-zone drop';
        return false;
    }

    dropZone.ondragleave = function () {
        this.className = 'upload-drop-zone';
        return false;
    }

});