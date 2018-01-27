class Usuario {
    constructor(_id, _nombre, _departamento, _nivel) {
        var id = _id;
        var nombre = _nombre;
        var departamento = _departamento;
        var nivel = _nivel;

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