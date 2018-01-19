class Usuario {
    constructor(id, login, pass, nombre, departamento, permisos, peticiones, log) {
        var _id = id;
        var _login = login;
        var _pass = pass;
        var _nombre = nombre;
        var _departamento = departamento;
        var _permisos = permisos;
        var _peticiones = peticiones;
        var _log = log;

        this.getId = function () {
            return _id;
        };
        this.getLogin = function () {
            return _login;
        };
        this.getPass = function () {
            return _pass;
        };
        this.getNombre = function () {
            return _nombre;
        };
        this.getDepartamento = function () {
            return _departamento;
        };
        this.getPermisos = function () {
            return _permisos;
        };
        this.getPeticiones = function () {
            return _peticiones;
        };
        this.getLog = function () {
            return _log;
        };


        this.setId = function (id) {
            _id = id;
        };
        this.setLogin = function (login) {
            _login = login;
        };
        this.setPass = function (pass) {
            _pass = pass;
        };
        this.setNombre = function (nombre) {
            _nombre = nombre;
        };
        this.setDepartamento = function (departamento) {
            _departamento = departamento;
        };
        this.setPermisos = function (permisos) {
            _permisos = permisos;
        };
        this.setPeticiones = function (peticiones) {
            _peticiones = peticiones;
        };
        this.setLog = function (log) {
            _log = log;
        };
    }

    imprimir(elementoID) {
        $("#" + elementoID).append("<tr><td>" + this.getId() + "</td><td>" + this.getLogin + "</td><td>" + this.getNombre + "</td><td>" + this.getDepartamento + "</td><td>" + this.getPermisos + "</td><td>" + this.getPeticiones + "</td><td>" + this.getLog + "</td></tr>");
    }

}