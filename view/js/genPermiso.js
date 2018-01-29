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

function injectFormPermiso(peticion) {
    $("#donya").val(peticion.getNombreSolicitante());

    switch (peticion.getMotivo()) {
        case "matrimonio":
            $("#motivo-matrimonio").attr("checked", true);
            break;
        case "prenatales":
            $("#motivo-prenatales").attr("checked", true);
            break;
        case "lactancia":
            $("#motivo-lactancia").attr("checked", true);
            break;
        case "embarazo":
            $("#motivo-embarazo").attr("checked", true);
            break;
        case "permiso-medico":
            $("#motivo-permiso-medico").attr("checked", true);
            break;
        case "enfermedad":
            $("#motivo-enfermedad").attr("checked", true);
            break;
        case "pruebas":
            $("#motivo-pruebas").attr("checked", true);
            break;
        case "traslado":
            $("#motivo-traslado").attr("checked", true);
            break;
        case "deber-inexcusable":
            $("#motivo-deber-inexcusable").attr("checked", true);
            break;
        case "funciones-representativas":
            $("#motivo-funciones-representativas").attr("checked", true);
            break;
    }

    $("#valor-deber-inexcusable").val(peticion.getMotivoInexcusable());
    $("#valor-funciones-representativas").val(peticion.getMotivoRepresentativas());

    let jornadaCompleta = peticion.getJornada()["completa"];
    $("#completa-fecha-desde").val(jornadaCompleta["diaInicio"]);
    $("#completa-fecha-hasta").val(jornadaCompleta["diaFin"]);

    let jornadaParcial = peticion.getJornada()["parcial"];
    $("#incompleta-fecha-desde").val(jornadaParcial["diaInicio"]);
    $("#incompleta-fecha-hasta").val(jornadaParcial["diaFin"]);
    $("#incompleta-hora-desde").val(jornadaParcial["horaInicio"]);
    $("#incompleta-hora-hasta").val(jornadaParcial["horaFin"]);

    for(let i = 1; i < 9; i++){
        let horario = peticion.getHorario()[i];
        $("#horario-dia-" + i).val(horario["dia"]);
        $("#horario-hora-"  + i).val(horario["hora"]);
        $("#horario-curso-"  + i).val(horario["curso"]);
        $("#horario-asignatura-"  + i).val(horario["asignatura"]);
        $("#horario-profesor-"  + i).val(horario["sustituto"]);
    }

    $("#documentacion-observaciones").val(peticion.getObservaciones());

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

    $("#firma-firma").val(peticion.getFirma());

    $("#documentacion-observaciones").val(peticion.getObservaciones());
}

function disableFormGenPeticion(){
    $('form').find('input, textarea, button, select').attr('disabled','disabled');

    $("#enviarGenPeticion").attr("disabled", true);
    $("#guardarGenPeticion").attr("disabled", true);
}

function addFormTramitarPeticion(){
    $("#formTramitarGenPermiso").append(
    "<div>" +
    "<hr>" +
    "<h4>Autorizar permiso</h4>" +
    "<p class='lead'>Autorizar, rechazar o comentar solicitud</p>" +
    "<div class='form-group'>" +
        "<label for='comentario-texto'' class='col-form-label'>Comentario</label>" +
        "<textarea name='comentario-texto' id='comentario-texto' rows='3' class='form-control' placeholder='Ej. Motivo de rechazo'></textarea>" +
        "</div>" +
        "<button type='button' id='agregarComentario' class='btn btn-primary px-5 mr-4'>Enviar comentario</button>" +
    "<button type='button' id='aceptarPermiso' class='btn btn-success px-5 mr-2'>Autorizar permiso</button>" +
    "<button type='button' id='denegarPermiso' class='btn btn-danger px-5'>Rechazar permiso</button>" +
    "</div>"
    );
}