"use strict";

function evalExistAnexo(ressult){
    if($("#adjunto-documentacion-obervaciones").val() != "" ||
        $("#adjunto-documentacion-obervaciones").val() != null ||
        $("#adjunto-documentacion-obervaciones").val() != "null"){

        let ruta = $("#adjunto-documentacion-obervaciones").val().split(".");

        if(ruta[ruta.length - 1 ] = "pdf"){
            anexosManager.getAnexos("id=" + gestor.getPeticiones()[0].getIdPeticion(), 'anyadirAnexo');
        }
        else { addLog(""); }
    }
    else { addLog(""); }
}

function anyadirAnexo(ressult){
    let anexo = new Anexo(ressult[0]);
    let anexoFile = readFile();
    anexo.addAnexos(anexoFile);
    console.log(anexoFile);
    let anexoJSON = { "id": anexo.getId(), "anexos": anexo.getAnexos() };

    anexosManager.updateAnexos(anexoJSON, gestor.getPeticiones()[0].getIdPeticion(), "addLog");
}

function readFile(){
    let ressult = "";
    let file = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader();

    if (file) { reader.readAsDataURL(file); }

    reader.onloadend = function () {
        ressult = reader.result;
        console.log(ressult);
        return ressult;
    }
}
