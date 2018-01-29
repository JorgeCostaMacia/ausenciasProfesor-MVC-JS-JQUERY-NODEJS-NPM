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
}