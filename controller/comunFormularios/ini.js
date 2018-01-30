"use strict";

var logManager = new LogManager();
var anexosManager = new AnexosManager();

// EVALUA LOCALSTORAGE
// SI RECIBE PETICION - LLAMA PETICION BD
function iniFormPeticion(){
    if(gestor.getLocal()["idPeticion"] != ""){
        peticionManager.getPeticion("id=" + gestor.getLocal()["idPeticion"], 'formPeticion');
    }
    else { iniFormPeticionNuevo(); }
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
        injectFormBasicPeticion(gestor.getPeticiones()[0]);
        injectFormEspecificPeticion(gestor.getPeticiones()[0]);

        if(gestor.getPeticiones()[0].getCola() == "penJustificante"){
            injectActualDate(gestor.getPeticiones()[0]);
        }
        evalDirectorFirma();
    }

    disables();
}

function disables(){
    let petition = gestor.getPeticiones()[0];
    if(gestor.getLocal()["accion"] == "detalles"){
        if(petition.getNombreSolicitante() != gestor.getLocal()["nombre"]){
            disableFormPeticion();
            disableFormPeticionEspecific();
        }

        if(petition.getCola() == "penAutorizarPermiso" || petition.getCola() == "penAutorizarJustificante"){
            disableFormPeticion();

            if(petition.getCola() == "penAutorizarJustificante"){
                disableFormPeticionEspecific();
            }

            if(gestor.getLocal()["nivel"] != "profesor"){
                addFormTramitarPeticion();
                addEventsComentarios();
            }
        }
    }
}