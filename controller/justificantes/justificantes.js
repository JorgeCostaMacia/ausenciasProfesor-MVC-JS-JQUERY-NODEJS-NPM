"use strict";

// gestor - loginManager - peticionManager

// LIMPIA MENSAJES
// RECOGDE NOMBRE COLA FECHACREACION FECHA LLEGADA DE FORMULARIO
// MONTA PARAMETROS BUSQUEDA - GESTIONA CAMPOS VACIOS
// EVALUA VALORES
// SI SON CORRECTOS
// LOS EVALUA
// SI NO SON CORRECTOS MUESTRA ADVERTENCIA
// SI SON CORRECTO LLAMA BD PETICIONES
function evalSearch(){
    msjClean();
    cleanTable();
    gestor.setPeticiones(new Array());

    let nombre = $("#buscador-texto").val();
    let cola = "penAutorizarPermiso";
    let fechaCreacion = $("#buscador-fecha-creacion").val();
    let fechaLlegada = $("#buscador-fecha-llegada").val();

    let whereParameter = "cola=penJustificante";

    if(nombre == ""){ nombre = "aaaaa aaaa aaaa"; }
    else { whereParameter += "&nombreSolicitante=" + nombre; }
    if(fechaCreacion == ""){ fechaCreacion = "0000-00-00"; }
    else { whereParameter += "&fechaCreacion=" + fechaCreacion; }
    if(fechaLlegada == ""){ fechaLlegada = "9999-99-99"; }
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

// RECIBE RESULTADO PETICIONES BD
// SI NO HAY PETICIONES MUESTRA ADVERTENCIA
// SI HAY PETICIONES INYECTA PETICIONES Y AÑADE EVENTOS
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

// RECIBE EVENTO QUE LO ACCIONA
// SACA ID PETICION DEL BOTON QUE LO ACCIONA
// OBTIENE PETICION DE GESTOR - OBTIENE SUS COMENTARIOS
// MUESTRA ADVERTENCIA CON COMENTARIOS
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

// RECIBE EVENTO QUE LO ACCIONA
// SACA ID PETICION DEL BOTON QUE LO ACCIONA
// AÑADE ID A LOCAL STORAGE
// REDIRIGE A FORM_PERMISOS
function handlerDetalles(event){
    let inputName = event.target.id;
    let arrayId = inputName.split("-");
    let idPeticion = arrayId[1];

    gestor.addPeticionLocal(idPeticion, "detalles");

    window.location.assign("form_justificante.html");
}