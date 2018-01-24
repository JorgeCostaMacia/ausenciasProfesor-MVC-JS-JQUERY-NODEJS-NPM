"use strict";

class LoginManager {
    getLogin(loginId, loginPass, returnFunction){
        let parameter = '?id=' + loginId;
        if(loginPass != ""){ parameter += '&pass=' + loginPass; }
        ajaxQuery("http://localhost:3000/login", parameter, returnFunction, "GET", 0);
    }

    addLogin(loginId, loginPass){
        let parameter = '?id=' + loginId + '&pass=' + loginPass;
        ajaxQuery("http://localhost:3000/login", parameter, returnFunction, "PUT", 0);
    }

    addToken(loginId, token){
        let parameter = {'token': token}
        ajaxQuery("http://localhost:3000/login/" + loginId, parameter, '', "PATCH", 0);
    }

    delToken(loginId){
        let parameter = {'token': ''}
        ajaxQuery("http://localhost:3000/login/" + loginId, parameter, '', "PATCH", 0);
    }
}




