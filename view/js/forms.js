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

function rellFormPermiso() {

    let peticion = {
        "id": 1,
        "idUsuario": "jorge",
        "cola": "genPermiso",
        "nombreSolicitante": "jorge costa macia",
        "fechaCreacion": "2018-01-01",
        "fechaLlegada": "2018-01-27",
        "motivo": "prenatales",
        "jornada": {
            "1": {
                "diaInicio": "",
                "diaFin": ""
            },
            "2": {
                "diaInicio": "",
                "horaInicio": "",
                "diaFin": "",
                "horaFin": ""
            }
        },
        "horario": {
            "1": {
                "dia": "2018-01-",
                "hora": "",
                "curso": "",
                "asignatura": "",
                "sustituto": ""
            },
            "2": {
                "dia": "",
                "hora": "",
                "curso": "",
                "asignatura": "",
                "sustituto": ""
            },
            "3": {
                "dia": "",
                "hora": "",
                "curso": "",
                "asignatura": "",
                "sustituto": ""
            },
            "4": {
                "dia": "",
                "hora": "",
                "curso": "",
                "asignatura": "",
                "sustituto": ""
            },
            "5": {
                "dia": "",
                "hora": "",
                "curso": "",
                "asignatura": "",
                "sustituto": ""
            }
        },
        "comentarios": "",
        "anexos": []
    };


    let don = $("#ddña");
    don.val(peticion.nombreSolicitante);
    don.attr("disabled", true);

    switch (peticion.motivo) {
        case "matrimonio":
            $("#motivo-matrimonio").attr("checked", true)
            break;
        case "prenatales":
            $("#motivo-prenatales").attr("checked", true)
            break;
        case "lactancia":
            $("#motivo-lactancia").attr("checked", true)
            break;
        case "embarazo":
            $("#motivo-embarazo").attr("checked", true)
            break;
        case "permiso-medico":
            $("#motivo-permiso-medico").attr("checked", true)
            break;
        case "enfermedad":
            $("#motivo-enfermedad").attr("checked", true)
            break;
        case "pruebas":
            $("#motivo-pruebas").attr("checked", true)
            break;
        case "traslado":
            $("#motivo-traslado").attr("checked", true)
            break;
        case "deber-inexcusable":
            $("#motivo-deber-inexcusable").attr("checked", true)
            break;
        case "funciones-representativas":
            $("#motivo-funciones-representativas").attr("checked", true)
            break;
    }

    switch (peticion.jornada) {
        case 1:
            break;
        case 2:
            break;
    }




}