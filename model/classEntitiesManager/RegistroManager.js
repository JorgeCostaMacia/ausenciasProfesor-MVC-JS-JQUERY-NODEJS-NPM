"use strict";

class RegistroManager {
    getRegistro(whereParameter, returnFunction){
        $.ajax({
            cache: false,
            url:"http://localhost:3000/registro",
            type:"GET",
            data: whereParameter,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger("Se ha producido un error en la conexion"); }
        })
    }

    addRegistro(id, pass, nombre, departamento, nivel, returnFunction){
        $.ajax({
            url:"http://localhost:3000/registro",
            type:"POST",
            data: 'id=' + id + '&pass=' + pass + '&nombre=' + nombre + '&departamento=' + departamento + '&nivel=' + nivel,
            cache: false,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger("Se ha producido un error en la conexion"); }
        });
    }

    delRegistro(id){
        $.ajax({
            cache: false,
            url:"http://localhost:3000/registro/" + id,
            type:"DELETE",
            error: function (){ msjDanger("Se ha producido un error en la conexion"); }
        })
    }

}
