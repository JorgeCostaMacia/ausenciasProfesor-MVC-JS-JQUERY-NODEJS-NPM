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
            success: returnFunction,
        	error: msjDanger("No puede Conectarse GET LOGIN")
        });
    }

    addLogin(loginId, loginPass){
        $.ajax({
            url:"http://localhost:3000/login",
            type:"PUT",
            data: 'id=' + loginId + '&pass=' + loginPass,
            cache: false,
            error: msjDanger("No puede Conectarse"),
      });
    }

    addToken(loginId, token){
       $.ajax({
            url:"http://localhost:3000/login/" + loginId,
            type:"PATCH",
            data: {'token': token},
           cache: false,
           error: msjDanger("No puede Conectarse TOK GET"),
       });
    }

   delToken(loginId){
        $.ajax({
            url:"http://localhost:3000/login"+loginId,
            type:"PATCH",
            data: {'token': ''},
            cache: false,
            error: msjDanger("No puede Conectarse TOK DEL")
        });
    }

}