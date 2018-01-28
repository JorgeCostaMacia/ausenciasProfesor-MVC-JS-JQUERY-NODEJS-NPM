"use strict";

function injectNombreCompletoDisable(nombre) {
    $("#buscador-texto").attr('value', nombre);
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

function rellFormPermiso(peticion) {

    /*let peticion = {
        "id": 1,
        "idUsuario": "jorge",
        "cola": "genPermiso",
        "nombreSolicitante": "jorge costa macia",
        "fechaCreacion": "2018-01-01",
        "fechaLlegada": "2018-01-27",
        "motivo": "prenatales",
        "jornada": {
            "a": {
                "diaInicio": "1998-10-05",
                "diaFin": ""
            },
            "b": {
                "diaInicio": "",
                "horaInicio": "",
                "diaFin": "",
                "horaFin": ""
            }
        },
        "horario": {
            "a": {
                "dia": "2018-01-01",
                "hora": "",
                "curso": "asa",
                "asignatura": "asa",
                "sustituto": "asa"
            },
            "b": {
                "dia": "",
                "hora": "",
                "curso": "",
                "asignatura": "",
                "sustituto": ""
            },
            "c": {
                "dia": "",
                "hora": "",
                "curso": "",
                "asignatura": "",
                "sustituto": ""
            },
            "d": {
                "dia": "",
                "hora": "",
                "curso": "",
                "asignatura": "",
                "sustituto": ""
            },
            "e": {
                "dia": "",
                "hora": "",
                "curso": "",
                "asignatura": "",
                "sustituto": ""
            }
        },
        "comentarios": "",
        "anexos": []
    };*/


    let don = $("#ddña");
    don.val(peticion.nombreSolicitante);
    don.attr("disabled", true);

    switch (peticion.motivo) {
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
    $("#completa-fecha-desde").val(peticion.jornada.a.diaInicio);
    $("#completa-fecha-hasta").val(peticion.jornada.a.diaFin);

    $("#incompleta-fecha-desde").val(peticion.jornada.b.diaInicio);
    $("#incompleta-fecha-hasta").val(peticion.jornada.b.diaFin);
    $("#incompleta-hora-desde").val(peticion.jornada.b.horaInicio);
    $("#incompleta-hora-hasta").val(peticion.jornada.b.horaFin);

    // horario
    $("#horario-dia-1").val(peticion.horario.a.dia);
    $("#horario-hora-1").val(peticion.horario.a.hora);
    $("#horario-curso-1").val(peticion.horario.a.curso);
    $("#horario-asignaruta-1").val(peticion.horario.a.asignatura);
    $("#horario-profesor-1").val(peticion.horario.a.sustituto);

    $("#horario-dia-2").val(peticion.horario.b.dia);
    $("#horario-hora-2").val(peticion.horario.b.hora);
    $("#horario-curso-2").val(peticion.horario.b.curso);
    $("#horario-asignaruta-2").val(peticion.horario.b.asignatura);
    $("#horario-profesor-2").val(peticion.horario.b.sustituto);

    $("#horario-dia-3").val(peticion.horario.c.dia);
    $("#horario-hora-3").val(peticion.horario.c.hora);
    $("#horario-curso-3").val(peticion.horario.c.curso);
    $("#horario-asignaruta-3").val(peticion.horario.c.asignatura);
    $("#horario-profesor-3").val(peticion.horario.c.sustituto);

    $("#horario-dia-4").val(peticion.horario.d.dia);
    $("#horario-hora-4").val(peticion.horario.d.hora);
    $("#horario-curso-4").val(peticion.horario.d.curso);
    $("#horario-asignaruta-4").val(peticion.horario.d.asignatura);
    $("#horario-profesor-4").val(peticion.horario.d.sustituto);

    $("#horario-dia-5").val(peticion.horario.e.dia);
    $("#horario-hora-5").val(peticion.horario.e.hora);
    $("#horario-curso-5").val(peticion.horario.e.curso);
    $("#horario-asignaruta-5").val(peticion.horario.e.asignatura);
    $("#horario-profesor-5").val(peticion.horario.e.sustituto);

    //comentarios
    $("#documentacion-observaciones").val(peticion.comentarios);


}