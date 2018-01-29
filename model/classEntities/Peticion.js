"use strict";

class Peticion{
    constructor(peticionJSON){
        var idPeticion = peticionJSON["id"];
        var idUsuario = peticionJSON["idUsuario"];
        var cola = peticionJSON["cola"];
        var nombreSolicitante = peticionJSON["nombreSolicitante"];
        var fechaCreacion = peticionJSON["fechaCreacion"];
        var fechaLlegada = peticionJSON["fechaLlegada"];
        var motivo = peticionJSON["motivo"];
        var jornada = peticionJSON["jornada"];
        var horario = peticionJSON["horario"];
        var observaciones = peticionJSON["observaciones"];
        var fechaFirma = peticionJSON["fechaFirma"];
        var firma = peticionJSON["firma"];
        var comentarios = peticionJSON["comentarios"];
        var anexos = peticionJSON["anexos"];

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

        this.getFechaFirma = function () { return fechaFirma; };
        this.setFechaFirma = function (_fechaFirma) { fechaFirma = _fechaFirma; };

        this.getFirma = function () { return firma; };
        this.setFirma = function (_firma) { firma = _firma; };

        this.getComentarios = function () { return comentarios; };
        this.setComentarios = function (_comentarios) { comentarios = _comentarios; };
        this.addComentarios = function (_comentarios) { comentarios.push(_comentarios); };

        this.getAnexos = function () { return anexos; };
        this.setAnexos = function (_anexos) { anexos = _anexos; };
    }
}