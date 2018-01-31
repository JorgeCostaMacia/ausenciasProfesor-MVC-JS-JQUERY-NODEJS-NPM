"use strict";

function evalExistAnexo(ressult){
    if($("#adjunto-documentacion-obervaciones").val() != ""){

        let ruta = $("#adjunto-documentacion-obervaciones").val().split(".");

        anexosManager.getAnexos(gestor.getPeticiones()[0].getIdPeticion(), 'readFile');

    }
    else { addLog(""); }
}

function readFile(ressult) {
    let anexo = new Anexo(ressult);
    let file = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader();

    if (file) { reader.readAsDataURL(file); }

    reader.onloadend = function () {
        let fileAnex = reader.result;
        anexo.addAnexos(fileAnex);
        grabarAnexo(anexo);
    }
}

function grabarAnexo(anexo) {
    let anexoJSON = { "anexos": anexo.getAnexos()};
    console.log(anexoJSON);
    anexosManager.updateAnexos(anexoJSON, gestor.getPeticiones()[0].getIdPeticion(), "addLog");
}
