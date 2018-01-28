"use strict";

function injectNombreCompletoDisable(nombre) {
    $("#buscador-texto").val(nombre);
    $("#buscador-texto").attr('disabled', 'disabled');
}

function injectCaption(text) {
    $("#caption").append(text);
}

function injectPeticiones(peticiones) {
    for (let i = 0; i < peticiones.length; i++) {
        let fechaAux = peticiones[i].getFechaCreacion().split("-");
        let fechaCreacion = fechaAux[2] + "/" + fechaAux[1] + "/" + fechaAux[0];
        fechaAux = peticiones[i].getFechaLlegada().split("-");
        let fechaLlegada = fechaAux[2] + "/" + fechaAux[1] + "/" + fechaAux[0];

        $("#tbody").append(
            '<tr>' +
            '<td>' + peticiones[i].getNombreSolicitante() + '</td>' +
            '<td>' + fechaCreacion + '</td>' +
            '<td>' + fechaLlegada + '</td>' +
            '<td><div id="comentarios-' + peticiones[i].getIdPeticion() + '" class="link">' + peticiones[i].getComentarios().length + '</div></td>' +
            '<td><div id="detalles-' + peticiones[i].getIdPeticion() + '" class="link">Detalles</div></td>' +
            '</tr>'
        );
    }
}

function injectRegistors(registros) {
    for (let i = 0; i < registros.length; i++) {
        $("#tbody").append(
            '<tr id="tr-' + registros[i].getId() + '">' +
            '<td>' + registros[i].getId() + '</td>' +
            '<td>' + registros[i].getNombre() + '</td>' +
            '<td>' + registros[i].getDepartamento() + '</td>' +
            '<td>' + registros[i].getNivel() + '</td>' +
            '<td>' +
            '<div class="d-flex">' +
            '<button id="aceptar-' + registros[i].getId() + '" class="btn btn-success btn-sm text-uppercase mr-3">Aceptar</button>' +
            '<button id="denegar-' + registros[i].getId() + '" class="btn btn-danger btn-sm text-uppercase">Rechazar</button>' +
            '</div>' +
            '</td>' +
            '</tr>'
        );
    }
}

function delTrRegistro(idTr) {
    $('#' + idTr).remove();
}

function injectFormPermiso(peticion) {
    $("#donya").val(peticion.getNombreSolicitante());
    $("#donya").attr("disabled", true);

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

    //jornada
    let jornadaCompleta = peticion.getJornada()["completa"];
    $("#completa-fecha-desde").val(jornadaCompleta["diaInicio"]);
    $("#completa-fecha-hasta").val(jornadaCompleta["diaFin"]);

    let jornadaParcial = peticion.getJornada()["parcial"];
    $("#incompleta-fecha-desde").val(jornadaParcial["diaInicio"]);
    $("#incompleta-fecha-hasta").val(jornadaParcial["diaFin"]);
    $("#incompleta-hora-desde").val(jornadaParcial["horaInicio"]);
    $("#incompleta-hora-hasta").val(jornadaParcial["horaFin"]);

    // horario
    for(let i = 1; i < 6; i++){
        let horario = peticion.getHorario()[i];
        $("#horario-dia-" + i).val(horario["dia"]);
        $("#horario-hora-"  + i).val(horario["hora"]);
        $("#horario-curso-"  + i).val(horario["curso"]);
        $("#horario-asignaruta-"  + i).val(horario["asignatura"]);
        $("#horario-profesor-"  + i).val(horario["sustituto"]);
    }

    //observaciones
    $("#documentacion-observaciones").val(peticion.getObservaciones());
}