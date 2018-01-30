"use strict";

class LogManager{
    addLog(logJSON, returnFunction){
        $.ajax({
            url:"http://localhost:3000/log",
            type:"POST",
            contentType: "application/json",
            data: JSON.stringify(logJSON),
            cache: false,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        });
    }

    getLog(returnFunction){
        $.ajax({
            cache: false,
            url:"http://localhost:3000/log",
            type:"GET",
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        })
    }
}