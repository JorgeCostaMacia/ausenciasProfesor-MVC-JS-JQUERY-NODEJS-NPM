class Usuario {
    constructor(id, nombre, departamento, nivel, log) {
        var _id = id;
        var _nombre = nombre;
        var _departamento = departamento;
        var _nivel = nivel;
        var _log = log;

        this.getId = function () { return _id; };
        this.setId = function (id) { _id = id; };

        this.getNombre = function () { return _nombre; };
        this.setNombre = function (nombre) { _nombre = nombre; };

        this.getDepartamento = function () { return _departamento; };
        this.setDepartamento = function (departamento) { _departamento = departamento; };

        this.getNivel = function () { return _nivel; };
        this.setNivel = function (nivel) { _nivel = nivel };

        this.getLog = function () { return _log; };
        this.setLog = function (log) { _log = log; };
    }

    imprimir(elementoID) {
        $("#" + elementoID).append("<tr><td>" + this.getId() + "</td><td>" + this.getLogin + "</td><td>" + this.getNombre + "</td><td>" + this.getDepartamento + "</td><td>" + this.getPermisos + "</td><td>" + this.getPeticiones + "</td><td>" + this.getLog + "</td></tr>");
    }

}