class Usuario {
    constructor(usuarioJSON){
        var id = usuarioJSON["id"];
        var nombre = usuarioJSON["nombre"];
        var departamento = usuarioJSON["departamento"];
        var nivel = usuarioJSON["nivel"];

        this.getId = function () { return id; };
        this.setId = function (_id) { id = _id; };

        this.getNombre = function () { return nombre; };
        this.setNombre = function (_nombre) { nombre = _nombre; };

        this.getDepartamento = function () { return departamento; };
        this.setDepartamento = function (_departamento) { departamento = _departamento; };

        this.getNivel = function () { return nivel; };
        this.setNivel = function (_nivel) { nivel = _nivel };
    }
}