"use strict";

class UsuarioManager {
	getUsuario(idUsuario, returnFunction){
		$.ajax({
			url:"http://localhost:3000/usuarios",
			type:"GET",
			data: 'id=' + idUsuario,
            cache: false,
            error: msjDanger("No puede Conectarse US GET"),
			success: returnFunction
		});
	}
}
