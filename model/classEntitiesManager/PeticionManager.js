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

    addComent(commentJSON, idPeticion, returnFunction){
        $.ajax({
            url:"http://localhost:3000/peticiones/" + idPeticion,
            type:"PATCH",
            contentType: "application/json",
            data: JSON.stringify(commentJSON),
            cache: false,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        });
    }

    updatePeticion(peticionJSON, returnFunction){
        $.ajax({
            url:"http://localhost:3000/peticiones",
            type:"PUT",
            contentType: "application/json",
            data: JSON.stringify(peticionJSON),
            cache: false,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        });
    }

    addPeticion(peticionJSON, returnFunction){
        $.ajax({
            url:"http://localhost:3000/peticiones",
            type:"POST",
            contentType: "application/json",
            data: JSON.stringify(peticionJSON),
            cache: false,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        });
    }
}