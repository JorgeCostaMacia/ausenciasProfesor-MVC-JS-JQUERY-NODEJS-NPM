"use strict";

class Peticion{
    constructor(_idPeticion, _idUsuario, _cola, _nombreSolicitante, _fechaCreacion, _fechaLlegada, _comentarios ){
        var idPeticion = _idPeticion;
        var idUsuario = _idUsuario;
        var cola = _cola;
        var nombreSolicitante = _nombreSolicitante;
        var fechaCreacion = _fechaCreacion;
        var fechaLlegada = _fechaLlegada;
        var comentarios = _cosmentarios;

        this.getIdPeticion = function(){ return idPeticion; };
        this.setIdPeticion = function (_idPeticion) { idPeticion = _idPeticion; };

        this.getIdUsuario = function(){ return idUsuario; };
        this.setIdUsuario = function (_idUsuario) { idUsuario = _idUsuario; };

        this.getCola = function () { return cola; };
        this.setCola = function (_cola) { cola = _cola; };

        this.getNombreSolicitante = function () { return nombreSolicitante; };
        this.setNombreSolicitante = function (_nombreSolicitante) { nombreSolicitante = _nombreSolicitante; };

        this.getFechaCreacion = function () { return fechaCreacion; };
        this.setFechaCreacion = function (_fechaCreacion) { fechaCreacion = _fechaCreacion; };

        this.getFechaLlegada = function () { return fechaLlegada; };
        this.setFechaLlegada = function (_fechaLlegada) { fechaLlegada = _fechaLlegada; };

        this.getComentarios = function () { return comentarios; };
        this.setComentarios = function (_comentarios) { comentarios = _comentarios; };
    }
}