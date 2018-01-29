"use strict";

function iniFormPeticionNuevo(){
    let nombre = gestor.getLocal()["nombre"];
    let fechaActual = gestor.getDate().split("-");

    infectFormPermisoNuevo(nombre, fechaActual[2], fechaActual[1], fechaActual[0]);
}

