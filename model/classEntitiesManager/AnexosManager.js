"use strict";

class AnexosManager {
    addAnexo(anexoJSON, returnFunction){
        $.ajax({
            url:"http://localhost:3000/anexos",
            type:"POST",
            contentType: "application/json",
            data: JSON.stringify(anexoJSON),
            cache: false,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        });
    }

    getAnexos(idAnexo, returnFunction){
        $.ajax({
            cache: false,
            url:"http://localhost:3000/anexos/" + idAnexo,
            type:"GET",
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        })
    }

    updateAnexos(anexosJSON, idAnexo, returnFunction){
        $.ajax({
            url:"http://localhost:3000/anexos/" + idAnexo,
            type:"PATCH",
            contentType: "application/json",
            data: JSON.stringify(anexosJSON),
            cache: false,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        });
    }
}