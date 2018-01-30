"use strict";

class Anexo{
    constructor(anexosJSON) {
        var id = anexosJSON["id"];
        var anexos = anexosJSON["anexos"];

        this.getId = function(){ return id; };
        this.setId = function (_id) { id = _id; };

        this.getAnexos = function(){ return anexos; };
        this.setAnexos = function (_anexos) { anexos = _anexos; };
        this.addAnexos = function (_anexo) { anexos.push(_anexo); };
    }
}