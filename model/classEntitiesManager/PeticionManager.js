"use strict";

class PeticionManager {
    getPeticion(where, returnFunction){
        $.ajax({
            cache: false,
            url:"http://localhost:3000/peticiones",
            type:"GET",
            data: where,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger("Se ha producido un error en la conexion"); }
        })
    }

    addPeticion(id, pass, nombre, departamento, nivel){
        $.ajax({
            url:"http://localhost:3000/peticiones",
            type:"POST",
            data: 'id=' + id + '&pass=' + pass + '&nombre=' + nombre + '&departamento=' + departamento + '&nivel=' + nivel,
            cache: false,
            error: function (){ msjDanger("Se ha producido un error en la conexion"); }
        });
    }
}