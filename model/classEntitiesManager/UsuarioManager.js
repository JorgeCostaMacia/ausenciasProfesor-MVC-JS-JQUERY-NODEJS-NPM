"use strict";

class UsuarioManager {
    getUsuario(idUsuario, returnFunction){
        let parameter = '?id=' + idUsuario;
        ajaxQuery("http://localhost:3000/usuarios", parameter, returnFunction, "GET", 0);
    }
}
