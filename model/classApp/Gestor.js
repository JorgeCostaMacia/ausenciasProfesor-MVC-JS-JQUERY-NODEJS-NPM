"use strict";

class Gestor{
    constructor(){
        var logins = [];
        var usuarios = [];
        var peticiones = [];
        var registros = [];
        var logs = [];
        var anexos = [];

        this.getLogins = function() { return logins; }
        this.setLogins = function(loginss){ logins = loginss; }
        this.addLogins = function(login){ logins.push(login); }

        this.getUsuarios = function() { return usuarios; }
        this.setUsuarios = function(usuarioss){ usuarios = usuarioss; }
        this.addUsuarios = function(usuario){ usuarios.push(usuario); }

        this.getPeticiones = function() { return peticiones; }
        this.setPeticiones = function(peticioness){ peticiones = peticioness; }
        this.addPeticiones = function(peticion){ peticiones.push(peticion); }
        this.getPeticion = function(idPeticion) {
            for(let i = 0; i < peticiones.length; i++){
                if(peticiones[i].getIdPeticion() == idPeticion){ return peticiones[i]; }
            }
        }

        this.getRegistros = function() { return registros; }
        this.setRegistros = function(_registros){ registros = _registros; }
        this.addRegistros = function(registro){ registros.push(registro); }
        this.getRegistro = function(idRegistro) {
            for(let i = 0; i < registros.length; i++){
                if(registros[i].getId() == idRegistro){ return registros[i]; }
            }
        }

        this.getLogs = function() { return logs; }
        this.setLogs = function(_logs){ logs = _logs; }
        this.addLogs = function(log){ logs.push(log); }

        this.getAnexos = function() { return anexos; }
        this.setAnexos = function(_anexos){ anexos = _anexos; }
        this.addAnexos = function(anexo){ anexos.push(anexo); }
    }

    delLocal(){ localStorage.clear(); }

    getLocal(){
        let ressult = [];
        ressult["id"] = localStorage.getItem("id");
        ressult["nombre"] = localStorage.getItem("nombre");
        ressult["nivel"] = localStorage.getItem("nivel");
        ressult["registro"] = localStorage.getItem("registro");
        ressult["idPeticion"] = localStorage.getItem("peticion");
        ressult["accion"] = localStorage.getItem("accion");
        return ressult;
    }

    addLocal(idUsuario, nombreUsuario, nivelUsuario, registro, peticion){
        localStorage.setItem("id", idUsuario);
        localStorage.setItem("nombre", nombreUsuario);
        localStorage.setItem("nivel", nivelUsuario);
        localStorage.setItem("registro", registro);
        localStorage.setItem("peticion", peticion);
    }

    clearPeticionLocal(){
        localStorage.setItem("peticion", "");
        localStorage.setItem("accion", "");
    }
    addPeticionLocal(peticion, accion){
        localStorage.setItem("peticion", peticion);
        localStorage.setItem("accion", accion);
    }

    stringBase64(text){ return window.btoa(text); }

    base64String(text){ return window.atob(text); }

    getDateTime(){
        let fechaActual = new Date();
        return fechaActual.getFullYear() + "-" + (fechaActual.getMonth() *1 +1) + "-" + fechaActual.getDate() + '#' +
        fechaActual.getHours() + ':' + fechaActual.getMinutes() + ':' + fechaActual.getSeconds();
    }

    getDate(){
        let fechaActual = new Date();
        let mes = fechaActual.getMonth() * 1 + 1;
        if (mes < 10) mes = "0" + mes;
        return fechaActual.getFullYear() + "-" + mes + "-" + fechaActual.getDate();
    }

    getTime(){
        let fechaActual = new Date();
        return fechaActual.getHours() + ':' + fechaActual.getMinutes() + ':' + fechaActual.getSeconds();
    }

    genToken(){
        let login = this.getLogins()[0];
        let token = login.getId() + '#' + this.base64String(login.getPass()) + '#' + this.getDateTime();
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
