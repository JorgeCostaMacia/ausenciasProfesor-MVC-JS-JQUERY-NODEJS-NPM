"use strict";

var usuarioManager = new UsuarioManager();
var registroManager = new RegistroManager();

// LLAMA BD REGISTRO
function getRegistros(){
    registroManager.getRegistro("", 'evalRegistros');
}

// RECIBE RESULTADO REGISTRO BD
// SI NO RECIBE NINGUNO MUESTRA ADVERTENCIA
// SI RECIBE LOS INYECTA EN FORMULARIO
// AÑADE EVENTOS FORMULARIO
function evalRegistros(ressult){
    if(ressult.length == 0){ injectCaption("No hay registros que mostrar"); }
    else {
        for (let i = 0; i < ressult.length; i++) {
            let registro = new Registro(ressult[i]);
            gestor.addRegistros(registro);
        }

        injectRegistors(gestor.getRegistros());
        addEventsRegistros(gestor.getRegistros());
    }
}