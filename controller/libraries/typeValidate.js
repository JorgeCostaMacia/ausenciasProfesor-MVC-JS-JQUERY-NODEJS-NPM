"use strict";

function esTexto(dato){
    let controlLetra = true;
    if(dato != "" && dato != null){
        for(let i = 0; i < dato.length; i++){
            if(!esLetra(dato[i])){ controlLetra = false; i = dato.length; }
        }
    } else { controlLetra = false; }
    return controlLetra;
}

function esTextoNumero(dato){
    let controlLetra = true;
    if(dato != "" && dato != null){
        for(let i = 0; i < dato.length; i++){
            if(!esLetra(dato[i]) && !esNumeros(dato[i])){ controlLetra = false; i = dato.length; }
        }
    } else { controlLetra = false; }
    return controlLetra;
}

function esTextoEspacio(dato){
    let controlLetra = true;
    if(dato != "" && dato != null){
        for(let i = 0; i < dato.length; i++){
            if(!esLetra(dato[i]) && !esEspacio(dato[i])){ controlLetra = false; i = dato.length; }
        }
    } else { controlLetra = false; }
    return controlLetra;
}

function esNumeroGuion(dato){
    let controlNumero = true;
    if(dato != "" && dato != null){
        for(let i = 0; i < dato.length; i++){
            if(!esNumero(dato[i]) && !esGuion(dato[i])){ controlNumero = false; i = dato.length; }
        }
    } else { controlNumero = false; }
    return controlNumero;
}

function esNumeros(dato){
    let controlNumero = true;
    if(dato != "" && dato != null){
        for(let i = 0; i < dato.length; i++){
            if(!esNumero(dato[i])){ controlNumero = false; i = dato.length; }
        }
    } else { controlNumero = false; }
    return controlNumero;
}

function esTextoEspacioPuntoComaBarraNumero(dato){
    let controlNumero = true;
    if(dato != "" && dato != null){
        for(let i = 0; i < dato.length; i++){
            if(!esTexto(dato[i]) && !esEspacio(dato[i]) && !esPunto(dato[i]) && !esComa(dato[i]) && !esNumero(dato[i]) && !esBarra(dato[i])){ controlNumero = false; i = dato.length; }
        }
    } else { controlNumero = false; }
    return controlNumero;
}

function esNumeroPositivoEntero(dato){
    if(parseInt(dato) && esPositivo(dato) && esEntero(dato)){ return true; }
    else { return false; }
}

function esLetra(dato){
    if((dato.charCodeAt() > 64  && dato.charCodeAt() < 91) || dato.charCodeAt() == 165 || dato.charCodeAt() == 164 ||
        (dato.charCodeAt() > 96  && dato.charCodeAt() < 123)){ return true; }
    else { return false;}
}

function esEspacio(dato){
    if(dato.charCodeAt() == 32){ return true; }
    else { return false; }
}
function esNumero(dato){
    if(dato.charCodeAt() > 47  && dato.charCodeAt() < 58){ return true; }
    else { return false; }
}

function esPositivo(dato){
    if(parseInt(dato) > 0) { return true; }
    else { return false; }
}
function esEntero(dato){
    if(parseInt(dato) % 1 == 0) { return true; }
    else { return false; }
}

function esGuion(dato){
    if(dato.charCodeAt() == 45){ return true; }
    else { return false; }
}

function esPunto(dato){
    if(dato.charCodeAt() == 46){ return true; }
    else { return false; }
}

function esComa(dato){
    if(dato.charCodeAt() == 44){ return true; }
    else { return false; }
}

function esBarra(dato){
    if(dato.charCodeAt() == 47){ return true; }
    else { return false; }
}