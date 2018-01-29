"use strict";

class RegistroManager {
    getRegistro(whereParameter, returnFunction){
        $.ajax({
            cache: false,
            url:"http://localhost:3000/registro",
            type:"GET",
            data: whereParameter,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        })
    }

    addRegistro(registroJSON, returnFunction){
        $.ajax({
            url:"http://localhost:3000/registro",
            type:"POST",
            contentType: "application/json",
            data: JSON.stringify(registroJSON),
            cache: false,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        });
    }

    delRegistro(id){
        $.ajax({
            cache: false,
            url:"http://localhost:3000/registro/" + id,
            type:"DELETE",
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        })
    }

}
