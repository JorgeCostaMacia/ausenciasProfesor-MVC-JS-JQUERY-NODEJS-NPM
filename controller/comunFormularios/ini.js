"use strict";

var logManager = new LogManager();

// EVALUA LOCALSTORAGE
// SI RECIBE PETICION - LLAMA PETICION BD
function iniFormPeticion(){
    if(gestor.getLocal()["idPeticion"] != ""){
        peticionManager.getPeticion("id=" + gestor.getLocal()["idPeticion"], 'formPeticion');
    }
    else { iniFormGenPeticionNuevo(); }
}

// RECIBE RESULTADO PETICION BD
// SI NO HAY PETICIONES MUESTA ADVERTENCIA
// SI RECIBE INYECTA PETICIONES EN FORMULARIO
// RECOGE ACCION LOCAL STORAGE
// SI ES DETALLES DESAHIBILITA LA EDICION DEL FORMULARIO
function formPeticion(ressult){
    if(ressult.length == 0){ injectCaption("No hay documentos que mostrar"); }
    else {
        for(let i = 0; i < ressult.length; i++){
            let peticion = new Peticion(ressult[i]);
            gestor.addPeticiones(peticion);
        }
        injectFormPermiso(gestor.getPeticiones()[0]);
    }

    if(gestor.getLocal()["accion"] == "detalles"){
        if(gestor.getPeticiones()[0].getNombreSolicitante() != gestor.getLocal()["nombre"]){
            disableFormGenPeticion();
        }
        if(gestor.getPeticiones()[0].getCola() == "penAutorizarPermiso"){
            disableFormGenPeticion();
            if(gestor.getLocal()["nivel"] != "profesor"){
                addFormTramitarPeticion();
                addEventsComentarios();
            }
        }
    }
}