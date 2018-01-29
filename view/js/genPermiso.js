"use strict";

function infectFormPermisoNuevo(nombre, dia, mes, anyo){
    $("#donya").val(nombre);

    let firmaDiaNode = $("#firma-dia")[0];
    for(let i = 0; i < firmaDiaNode.length; i++){
        if(firmaDiaNode[i].value == dia){
            firmaDiaNode[i].setAttribute("selected", "true");
        }
    }

    let firmaMesNode = $("#firma-mes")[0];
    for(let i = 0; i < firmaMesNode.length; i++){
        if(firmaMesNode[i].value == mes){
            firmaMesNode[i].setAttribute("selected", "true");
        }
    }

    let firmaAnyoNode = $("#firma-anyo")[0];
    for(let i = 0; i < firmaAnyoNode.length; i++){
        if(firmaAnyoNode[i].value == anyo){
            firmaAnyoNode[i].setAttribute("selected", "true");
        }
    }

    $("#firma-firma").val(nombre);
}

function injectFormEspecificPeticion(peticion) {
    for(let i = 1; i < 9; i++){
        let horario = peticion.getHorario()[i];
        $("#horario-dia-" + i).val(horario["dia"]);
        $("#horario-hora-"  + i).val(horario["hora"]);
        $("#horario-curso-"  + i).val(horario["curso"]);
        $("#horario-asignatura-"  + i).val(horario["asignatura"]);
        $("#horario-profesor-"  + i).val(horario["sustituto"]);
    }

    let fechaCompleta = peticion.getFechaFirma().split("-");
    let firmaDiaNode = $("#firma-dia")[0];
    for(let i = 0; i < firmaDiaNode.length; i++){
        if(firmaDiaNode[i].value == fechaCompleta[2]){
            firmaDiaNode[i].setAttribute("selected", "true");
        }
    }

    let firmaMesNode = $("#firma-mes")[0];
    for(let i = 0; i < firmaMesNode.length; i++){
        if(firmaMesNode[i].value == fechaCompleta[1]){
            firmaMesNode[i].setAttribute("selected", "true");
        }
    }

    let firmaAnyoNode = $("#firma-anyo")[0];
    for(let i = 0; i < firmaAnyoNode.length; i++){
        if(firmaAnyoNode[i].value == fechaCompleta[0]){
            firmaAnyoNode[i].setAttribute("selected", "true");
        }
    }
}

function disableFormPeticionEspecific(){}
function injectActualDate(a){}