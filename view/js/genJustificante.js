"use strict";

function injectFormEspecificPeticion(peticion){
    if(peticion.getTipoAusencia() == "ausencia"){
        $("#tipoAusencia").attr("checked", true);
    }
    if(peticion.getTipoAusencia() == "retraso"){
        $("#tipoRetraso").attr("checked", true);
    }

    if(peticion.getMotivoAusencia() == "enfermedad"){
        $("#motivoEnfermedad").attr("checked", true);
    }
    if(peticion.getMotivoAusencia() == "permiso"){
        $("#motivoPermiso").attr("checked", true);
    }

    let horasAusencias = peticion.getHorasAusencia();
    $("#horas-lectivas-ausencia").val(horasAusencias["lectivas"]);
    $("#horas-otras-ausencia").val(horasAusencias["otras"]);
    $("#horas-complementarias-ausencia").val(horasAusencias["complementarias"]);
    $("#horas-evaluacion-ausencia").val(horasAusencias["evaluacion"]);
    $("#horas-claustro-ausencia").val(horasAusencias["claustro"]);
    $("#horas-ccp-ausencia").val(horasAusencias["ccp"]);
    $("#horas-consejo-ausencia").val(horasAusencias["consejo"]);
    $("#horas-reunion-dep-ausencia").val(horasAusencias["reunionDep"]);
    $("#horas-reunion-tutores-ausencia").val(horasAusencias["reunionTutores"]);
}

function injectActualDate(peticion){
    let fechaActual = gestor.getDate().split("-");

    let firmaDiaNode = $("#firma-dia")[0];
    for(let i = 0; i < firmaDiaNode.length; i++){
        if(firmaDiaNode[i].value == fechaActual[2]){
            firmaDiaNode[i].setAttribute("selected", "true");
        }
    }

    let firmaMesNode = $("#firma-mes")[0];
    for(let i = 0; i < firmaMesNode.length; i++){
        if(firmaMesNode[i].value == fechaActual[1]){
            firmaMesNode[i].setAttribute("selected", "true");
        }
    }

    let firmaAnyoNode = $("#firma-anyo")[0];
    for(let i = 0; i < firmaAnyoNode.length; i++){
        if(firmaAnyoNode[i].value == fechaActual[1]){
            firmaAnyoNode[i].setAttribute("selected", "true");
        }
    }
}

function injectFirmaDireccion(){
    $("#direccion-visto-firma").val( gestor.getLocal()["nombre"] );
}

function disableFormPeticionEspecific(){
    $("#tipoRetraso").attr("disabled", true);
    $("#tipoRetraso").attr("disabled", true);

    $("#motivoEnfermedad").attr("disabled", true);
    $("#motivoPermiso").attr("disabled", true);

    $("#horas-lectivas-ausencia").attr("disabled", true);
    $("#horas-otras-ausencia").attr("disabled", true);
    $("#horas-complementarias-ausencia").attr("disabled", true);
    $("#horas-evaluacion-ausencia").attr("disabled", true);
    $("#horas-claustro-ausencia").attr("disabled", true);
    $("#horas-ccp-ausencia").attr("disabled", true);
    $("#horas-consejo-ausencia").attr("disabled", true);
    $("#horas-reunion-dep-ausencia").attr("disabled", true);
    $("#horas-reunion-tutores-ausencia").attr("disabled", true);
    $("#adjunto-documentacion-obervaciones").attr("disabled", true);
}