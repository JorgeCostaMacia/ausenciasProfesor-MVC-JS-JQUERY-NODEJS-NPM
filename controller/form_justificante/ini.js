"use strict";

function evalDirectorFirma(){
    if(gestor.getLocal()["nivel"] != "profesor"){
        injectFirmaDireccion();
    }
}