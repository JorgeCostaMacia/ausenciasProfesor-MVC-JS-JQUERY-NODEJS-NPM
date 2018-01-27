"use strict";

function injectUsuarioForm(id){ $('#nombre-usuario').append(id); }

function injectCountForm(countGenPermiso, countPenAutorizarPermiso, countPenJustificante, countPenAutorizarJustificante, countAusenciaFinalizada){
   console.log("AAA");
    $('#countGenPermiso').append(countGenPermiso);
    $('#countPenAutorizarPermiso').append(countPenAutorizarPermiso);
    $('#countPenJustificante').append(countPenJustificante);
    $('#countPenAutorizarJustificante').append(countPenAutorizarJustificante);
    $('#countAusenciaFinalizada').append(countAusenciaFinalizada);
}