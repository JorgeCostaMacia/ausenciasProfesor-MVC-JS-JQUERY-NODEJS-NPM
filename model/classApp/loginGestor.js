"use strict";

class loginGestor{
    constructor(){

        this.validateLogin = function(loginId, loginPass){
            let errores = [];

            if(validateNickLogin(loginId)) { /*okNickLoginIcon(); */}
            else {
                errores.push("idLogin");
                //badNickLoginIcon();
            }

            if (validatePassLogin(loginPass)) { /*okPassLoginIcon();*/ }
            else {
                errores.push("passLogin");
                //badPassLoginIcon();
            }
        }

        this.getUsuarioLogin = function(loginId, loginPass, returnFunction){
            let parameter = 'id=' + loginId;
            if(loginPass != ""){ parameter += '&pass=' + loginPass; }
            ajaxQuery("localhost:3000/login?", parameter, returnFunction, "GET", 0);
        }

        this.addUsuarioLogin = function(){
            
        }







    }




}




