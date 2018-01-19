class Usuario {
    constructor(id, login, pass, nombre, departamento, permisos, peticiones, log) {
        this._id = id;
        this._login = login;
        this._pass = pass;
        this._nombre = nombre;
        this._departamento = departamento;
        this._permisos = permisos;
        this._peticiones = peticiones;
        this._log = log;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get login() {
        return this._login;
    }

    set login(value) {
        this._login = value;
    }

    get pass() {
        return this._pass;
    }

    set pass(value) {
        this._pass = value;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(value) {
        this._departamento = value;
    }

    get permisos() {
        return this._permisos;
    }

    set permisos(value) {
        this._permisos = value;
    }

    get peticiones() {
        return this._peticiones;
    }

    set peticiones(value) {
        this._peticiones = value;
    }

    get log() {
        return this._log;
    }

    set log(value) {
        this._log = value;
    }

    imprimir(elementoID) {
        $("#"+elementoID).append("<tr><td>" + this.id + "</td><td>" + this.login + "</td><td>" + this.pass + "</td><td>" + this.nombre + "</td><td>" + this.departamento + "</td><td>" + this.permisos + "</td><td>" + this.peticiones + "</td><td>" + this.log + "</td></tr>");
    }
}