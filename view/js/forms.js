"use strict";

function injectNombreCompletoDisable(nombre){
    $("#buscador-texto").attr('value',nombre);
    $("#buscador-texto").attr('disabled','disabled');
}

function injectCaption(text){
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

function injectRegistors(registros){
    for (let i = 0; i < registros.length; i++) {
        $("#tbody").append(
            '<tr id="tr-' + registros[i].getId() + '">' +
            '<td>' + registros[i].getId() + '</td>' +
            '<td>' + registros[i].getNombre() + '</td>' +
            '<td>' + registros[i].getDepartamento() + '</td>' +
            '<td>' + registros[i].getNivel() + '</td>' +
            '<td>' +
            '<div class="d-flex">' +
            '<button id="aceptar-' +  registros[i].getId() + '" class="btn btn-success btn-sm text-uppercase mr-3">Aceptar</button>' +
            '<button id="denegar-' +  registros[i].getId() + '" class="btn btn-danger btn-sm text-uppercase">Rechazar</button>' +
            '</div>' +
            '</td>' +
            '</tr>'
        );
    }
}

function delTrRegistro(idTr){ $('#' + idTr).remove(); }

function rellFormPermiso(obj){
    let obj = {
      "id": 1,
      "idUsuario": "admino",
      "cola": "genPermiso",
      "nombreSolicitante": "jorge costa macia",
      "fechaCreacion": "2018-01-01",
      "fechaLlegada": "2018-01-27",
      "motivo": "",
      "jornada": "",
      "desde": "",
      "hasta": "",
      "horario": {
        "1": {
          "dia": "",
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
      "comentarios": [],
      "anexos": []
    }

}