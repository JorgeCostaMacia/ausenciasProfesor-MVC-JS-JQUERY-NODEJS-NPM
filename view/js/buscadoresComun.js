"use strict";

function cleanTable(){
    $("#tbody").empty();
    $("#caption").empty();
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
            '<td><div id="anexos-' + peticiones[i].getIdPeticion() + '" class="link">Anexos</div></td>' +
            '</tr>'
        );
    }
}

function injectNombreCompletoDisable(nombre) {
    $("#buscador-texto").val(nombre);
    $("#buscador-texto").attr('disabled', 'disabled');
}

function injectAnexos(anexos){

}