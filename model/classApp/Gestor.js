"use strict";

class Gestor{
    constructor(){
        var logins = [];
        var usuarios = [];
        var peticiones = [];
    }
    

    vaciarLocal(){
        localStorage.clear();
    }

    getLocal(){
        let ressult = [];
        ressult["id"] = localStorage.getItem("id");
        ressult["permisos"] = localStorage.getItem("permisos");
        return ressult;
    }

    addLocal(idUsuario, nivelUsuario){
        localStorage.setItem("id", idUsuario);
        localStorage.setItem("nivel", nivelUsuario);
    }
}
