"use strict";

class Registro {
    constructor(registroJSON){
        var id = registroJSON["id"];
        var pass = registroJSON["pass"];
        var nombre = registroJSON["nombre"];
        var departamento = registroJSON["departamento"];
        var nivel = registroJSON["nivel"];

        this.getId = function () { return id; };
        this.setId = function (_id) { id = _id; };

        this.getPass = function () { return pass; };
        this.setPass = function (_pass) { pass = _pass; };

        this.getNombre = function () { return nombre; };
        this.setNombre = function (nombre) { nombre = nombre; };

        this.getDepartamento = function () { return departamento; };
        this.setDepartamento = function (departamento) { departamento = departamento; };

        this.getNivel = function () { return nivel; };
        this.setNivel = function (nivel) { nivel = nivel };
    }
}
