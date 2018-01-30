"use strict";

function evalExistAnexo(ressult) {
    if ($("#adjunto-documentacion-obervaciones").val() != "" ||
        $("#adjunto-documentacion-obervaciones").val() != null ||
        $("#adjunto-documentacion-obervaciones").val() != "null") {

        let ruta = $("#adjunto-documentacion-obervaciones").val().split(".");

<<<<<<< HEAD
        if(ruta[ruta.length - 1 ] = "pdf"){
            anexosManager.getAnexos(gestor.getPeticiones()[0].getIdPeticion(), 'anyadirAnexo');
=======
        if (ruta[ruta.length - 1] = "pdf") {
            anexosManager.getAnexos("id=" + gestor.getPeticiones()[0].getIdPeticion(), 'anyadirAnexo');
>>>>>>> 190b7bd129032630d54c889f191a1114398478f9
        }
        else {
            addLog("");
        }
    }
    else {
        addLog("");
    }
}

function anyadirAnexo(ressult) {
    let anexo = new Anexo(ressult[0]);
    readFile(anexo);
}

function readFile(anexo) {
    let file = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader();

    if (file) {
        reader.readAsDataURL(file);
    }

    reader.onloadend = function () {
        grabarAnexo(anexo,reader.result);
    }
}

function grabarAnexo(anexo,anexoFile) {
    anexo.addAnexos(anexoFile);
    let anexoJSON = {"id": anexo.getId(), "anexos": anexo.getAnexos()};
    anexosManager.updateAnexos(anexoJSON, gestor.getPeticiones()[0].getIdPeticion(), "addLog");
}