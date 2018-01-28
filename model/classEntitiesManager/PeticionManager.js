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

    addPeticion(peticionJSON){
        $.ajax({
            url:"http://localhost:3000/peticiones",
            type:"POST",
            contentType: "application/json",
            data: peticionJSON,
            cache: false,
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        });
    }
}