"use strict";

// gestor - loginManager - peticionManager

// LIMPIA MENSAJES
// RECOGDE NOMBRE COLA FECHACREACION FECHA LLEGADA DE FORMULARIO
// MONTA PARAMETROS BUSQUEDA - GESTIONA CAMPOS VACIOS
// EVALUA VALORES
// SI SON CORRECTOS
// LOS EVALUA
// SI NO SON CORRECTOS MUESTRA ADVERTENCIA
// SI SON ERRORES LLAMA BD PETICIONES
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
    else {
        let msjError = "";
        for(let i = 0; i < errores.length; i++){
            msjError += errores[i];
        }
        msjDanger('BUSQUEDA', msjError);
    }
}

function checkPeticiones(ressult){
    if(ressult.length == 0){ injectCaption("No hay documentos que mostrar"); }
    else {
        for(let i = 0; i < ressult.length; i++){
            let peticion = new Peticion(ressult[i]);
            gestor.addPeticiones(peticion);
        }
        injectPeticiones(gestor.getPeticiones());
        eventPeticiones(gestor.getPeticiones());
    }
}

function showComents(event){
    let inputName = event.target.id;
    let arrayId = inputName.split("-");
    let idPeticion = arrayId[1];

    let peticion = gestor.getPeticion(idPeticion);
    let comentarios = peticion.getComentarios();

    let msjComentarios = "";
    for(let i = 0; i < comentarios.length; i++){
        msjComentarios += comentarios[i] + '<br>';
    }
    msjInfo('COMENTARIOS', msjComentarios);
}

function handlerDetalles(event){
    let inputName = event.target.id;
    let arrayId = inputName.split("-");
    let idPeticion = arrayId[1];

    gestor.addPeticionLocal(idPeticion, "detalles");

    window.location.assign("form_permiso.html");
}