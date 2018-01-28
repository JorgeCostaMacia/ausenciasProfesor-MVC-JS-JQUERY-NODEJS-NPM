class Log{
    constructor(logJSON) {
        var idUsuario = logJSON["idUsuario"];
        var nombre = logJSON["nombre"];
        var fecha = logJSON["fecha"];
        var hora = logJSON["hora"];
        var colaInicio = logJSON["colaInicio"];
        var colaDestino = logJSON["colaDestino"];

        this.getIdUsuario = function(){ return idUsuario; };
        this.setIdUsuario = function (_idUsuario) { idUsuario = _idUsuario; };

        this.getNombre = function () { return nombre; };
        this.setNombre = function (_nombre) { nombre = _nombre; };

        this.getFecha = function () { return fecha; };
        this.setFecha = function (_fecha) { fecha = _fecha; };

        this.getHora = function () { return hora; };
        this.setHora = function (_hora) { hora = _hora; };

        this.getColaInicio = function () { return colaInicio; };
        this.setColaInicio = function (_colaInicio) { colaInicio = _colaInicio; };

        this.getColaDestino = function () { return colaDestino; };
        this.setColaDestino = function (_colaDestino) { colaDestino = _colaDestino; };
    }
}