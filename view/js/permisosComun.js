"use strict";

function injectFormBasicPeticion(peticion){
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

    $("#documentacion-observaciones").val(peticion.getObservaciones());

    $("#firma-firma").val(peticion.getFirma());
}

function addFormTramitarPeticion(){
    $("#formTramitarPermiso").append(
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

function disableFormPeticion(){
    $('form').find('input, textarea, button, select').attr('disabled','disabled');

    $("#enviarPeticion").attr("disabled", true);
    $("#guardarPeticion").attr("disabled", true);
}