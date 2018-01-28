"use strict";

class PeticionManager {
    getPeticion(where, returnFunction){
        $.ajax({
            cache: false,
            url:"http://localhost:3000/peticiones",
            type:"GET",
            data: where,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        })
    }

    addPeticion(idUsuario, cola, nombreSolicitante, fechaCreacion, fechaLlegada, motivo, jornada, horario, observaciones, fechaFirma, firma,  comentarios, anexos ){
        $.ajax({
            url:"http://localhost:3000/peticiones",
            type:"POST",
            dataTypes: 'json',
            data: 'idUsuario=' + idUsuario + '&cola=' + cola + '&nombreSolicitante=' + nombreSolicitante +
            '&fechaCreacion=' + fechaCreacion + '&fechaLlegada=' + fechaLlegada + '&motivo=' + motivo +
            '&jornada=' + jornada +  '&horario=' + horario +  '&observaciones=' + observaciones +
            '&fechaFirma=' + fechaFirma + '&firma=' + firma + '&comentarios=' + comentarios +
            '&anexos=' + anexos,
            cache: false,
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        });
    }
}