"use strict";

class Gestor{
    constructor(){
        var logins = [];
        var usuarios = [];
        var peticiones = [];

        this.getLogins = function() { return logins; }
        this.setLogins = function(loginss){ logins = loginss; }
        this.addLogins = function(login){ logins.push(login); }

        this.getUsuarios = function() { return usuarios; }
        this.setUsuarios = function(usuarioss){ usuarios = usuarioss; }
        this.addUsuarios = function(usuario){ usuarios.push(usuario); }

        this.getPeticiones = function() { return peticiones; }
        this.setPeticiones = function(peticioness){ peticiones = peticioness; }
        this.addPeticiones = function(peticion){ peticiones.push(peticion); }
    }

    delLocal(){ localStorage.clear(); }

    getLocal(){
        let ressult = [];
        ressult["id"] = localStorage.getItem("id");
        ressult["nombre"] = localStorage.getItem("nombre");
        ressult["permisos"] = localStorage.getItem("permisos");
        ressult["registro"] = localStorage.getItem("registro");
        return ressult;
    }

    addLocal(idUsuario, nombreUsuario, nivelUsuario, registro){
        localStorage.setItem("id", idUsuario);
        localStorage.setItem("nombre", nombreUsuario);
        localStorage.setItem("nivel", nivelUsuario);
        localStorage.setItem("registro", registro);
    }

    stringBase64(text){ return window.btoa(text); }

    base64String(text){ return window.atob(text); }

    genDate(){
        let fechaActual = new Date();
        return fechaActual.getFullYear() + "-" + (fechaActual.getMonth() *1 +1) + "-" + fechaActual.getDate() + '#' +
        fechaActual.getHours() + ':' + fechaActual.getMinutes() + ':' + fechaActual.getSeconds();
    }

    genToken(){
        let login = this.getLogins()[0];
        let token = login.getId() + '#' + this.base64String(login.getPass()) + '#' + this.genDate();
        return this.stringBase64(token);
    }

    addCookie(cname,cvalue,exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

     getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    existCookie() {
        let cookie = this.getCookie("token");
        if ( cookie != "") { return true; }
        else { return false; }
    }
}
