"use strict";

class LoginManager {
    getLogin(loginId, loginPass, returnFunction){
        let parameter = 'id=' + loginId;
        if(loginPass != ""){ parameter += '&pass=' + loginPass; }
        $.ajax({
        	url:"http://localhost:3000/login",
        	type:"GET",
        	data: parameter,
            success: returnFunction
        	//error: msjDanger("No puede Conectarse")
        });
    }

    addLogin(loginId, loginPass){
        let parameter = 'id=' + loginId + '&pass=' + loginPass;
        //ajaxQuery("http://localhost:3000/login", parameter, returnFunction, "PUT", 0);
        $.ajax({
            url:"http://localhost:3000/login",
            type:"PUT",
            data: parameter
        //    error: msjDanger("No puede Conectarse"),
          //  success: returnFunction
      });
    }

    addToken(loginId, token){
        let parameter = {'token': token}
       // ajaxQuery("http://localhost:3000/login/" + loginId, parameter, '', "PATCH", 0);
       $.ajax({
        url:"http://localhost:3000/login/"+loginId,
        type:"PATCH",
        data: parameter,
        error: msjDanger("No puede Conectarse")
      //  success: returnFunction
  });
   }

   delToken(loginId){
    let parameter = {'token': ''}
        //ajaxQuery("http://localhost:3000/login/" + loginId, parameter, '', "PATCH", 0);
        $.ajax({
            url:"http://localhost:3000/login"+loginId,
            type:"PATCH",
            data: parameter,
            error: msjDanger("No puede Conectarse")
         //   success: returnFunction
     });
    }

}