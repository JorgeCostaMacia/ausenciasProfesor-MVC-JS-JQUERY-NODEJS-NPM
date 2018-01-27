"use strict";

// gestor - loginManager - peticionManager

function evalSearch(){
    msjClean();

    let nombre = $("#buscador-texto").val();
    let cola = $("#buscador-cola").val();
    let fechaCreacion = $("#buscador-fecha-creacion").val();
    let fechaLlegada = $("#buscador-fecha-llegada").val();

    let whereParameter = "1=1";

    if(nombre == ""){ nombre == "aaaaa aaaa aaaa"; }
    else { whereParameter += "&nombre=" + nombre; }
    if(fechaCreacion == ""){ fechaCreacion == "0000-00-00"; }
    else { whereParameter += "&fechaCreacion=" + fechaCreacion; }
    if(fechaLlegada == ""){ fechaLlegada == "9999-99-99"; }
    else { whereParameter += "&fechaCreacion=" + fechaCreacion; }

    let errores = validateSearch(nombre, fechaCreacion, fechaLlegada);

    if(errores.length == 0){ peticionManager.getPeticion(whereParameter, 'checkPeticiones') }
}

function checkPeticiones(ressult){
    if(ressult.length == 0){ injectCaption("No hay documentos que mostrar"); }
    else {
        for(let i = 0; i < ressult.length; i++){
            let peticion = new Peticion(ressult[i]["id"], ressult[i]["idUsuario"], ressult[i]["cola"], ressult[i]["nombreSolicitante"],  ressult[i]["fechaCreacion"], ressult[i]["fechaLlegada"], ressult[i]["comentarios"], ressult[i]["anexos"]);
            gestor.addPeticiones(peticion);
        }
        injectPeticiones(gestor.getPeticiones());
    }
}
