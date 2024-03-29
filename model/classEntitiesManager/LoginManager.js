"use strict";

class LoginManager {
    getLogin(loginId, loginPass, returnFunction){
        let parameter = 'id=' + loginId;
        if(loginPass != ""){ parameter += '&pass=' + loginPass; }
        $.ajax({
            cache: false,
        	url:"http://localhost:3000/login",
        	type:"GET",
        	data: parameter,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        })
    }

    addLogin(loginJSON){
        $.ajax({
            url:"http://localhost:3000/login",
            type:"POST",
            contentType: "application/json",
            data: JSON.stringify(loginJSON),
            cache: false,
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
      });
    }

    addToken(loginId, token, returnFunction){
       $.ajax({
           url:"http://localhost:3000/login/" + loginId,
           type:"PATCH",
           data: "token=" + token,
           cache: false,
           success: function(ressult){ eval(returnFunction + '(ressult)'); },
           error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
       });
    }

   delToken(loginId, returnFunction){
        $.ajax({
            url:"http://localhost:3000/login/"+loginId,
            type:"PATCH",
            data: "token=" + "",
            cache: false,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        });
    }

}