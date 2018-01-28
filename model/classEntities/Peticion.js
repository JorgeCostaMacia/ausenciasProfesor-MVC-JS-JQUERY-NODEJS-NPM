"use strict";

class Peticion{
    constructor(_idPeticion, _idUsuario, _cola, _nombreSolicitante, _fechaCreacion, _fechaLlegada, _motivo, _jornada, _horario, _observaciones, _comentarios, _anexos ){
        var idPeticion = _idPeticion;
        var idUsuario = _idUsuario;
        var cola = _cola;
        var nombreSolicitante = _nombreSolicitante;
        var fechaCreacion = _fechaCreacion;
        var fechaLlegada = _fechaLlegada;
        var motivo = _motivo;
        var jornada = _jornada;
        var horario = _horario;
        var observaciones = _observaciones;
        var comentarios = _comentarios;
        var anexos = _anexos;

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

        this.getMotivo = function () { return motivo; };
        this.setMotivo = function (_motivo) { motivo = _motivo; };

        this.getJornada = function () { return jornada; };
        this.setJornada = function (_jornada) { jornada = _jornada; };

        this.getHorario = function () { return horario; };
        this.setHorario = function (_horario) { horario = _horario; };

        this.getObservaciones = function () { return observaciones; };
        this.setObservaciones = function (_observaciones) { observaciones = _observaciones; };

        this.getComentarios = function () { return comentarios; };
        this.setComentarios = function (_comentarios) { comentarios = _comentarios; };

        this.getAnexos = function () { return anexos; };
        this.setAnexos = function (_anexos) { anexos = _anexos; };
    }
}