"use strict";

class Registro {
    constructor(_id, _pass, _nombre, _departamento, _nivel) {
        var id = _id;
        var pass = _pass;
        var nombre = _nombre;
        var departamento = _departamento;
        var nivel = _nivel;

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
