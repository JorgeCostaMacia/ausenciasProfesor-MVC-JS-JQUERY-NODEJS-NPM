"use strict";

function validateNickLogin(loginNick) {
	if(esTexto(loginNick) && loginNick.length >= 5){ return true; }
	else { return false; }
}

function validatePassLogin(loginPass) {
	if(esTexto(loginPass) && loginPass.length >= 5) { return true; }
	else { return false; }	
}
function validateNombre(nombre){
    if(esTextoEspacio(nombre) && nombre.length >= 10 && esFormatNombre(nombre)){ return true; }
    else { return false; }
}

function validateDepartamento(departamento){
    if(esTexto(departamento) && departamento.length >= 5){ return true; }
    else { return false; }
}

function esFormatNombre(nombreCompleto){
    if(esLetra(nombreCompleto[0])){
        let nombreCom = nombreCompleto.split(" ");
        if(nombreCom.length == 3) { return true; }
        else { return false; }
    }
    else { return false; }
}