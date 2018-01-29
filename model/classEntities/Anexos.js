"use strict";

class Anexos{
    constructor(anexosJSON) {
        var anexos = anexosJSON;

        this.getAnexos = function(){ return anexos; };
        this.setAnexos = function (_anexos) { anexos = _anexos; };
    }
}