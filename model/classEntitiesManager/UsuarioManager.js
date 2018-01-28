"use strict";

class UsuarioManager {
	getUsuario(idUsuario, returnFunction){
		$.ajax({
			url:"http://localhost:3000/usuarios",
			type:"GET",
			data: 'id=' + idUsuario,
            cache: false,
            success: function(ressult){ eval(returnFunction + '(ressult)'); },
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
		});
	}
	addUsuario(usuarioJSON){
        $.ajax({
            url:"http://localhost:3000/usuarios",
            type:"POST",
            contentType: "application/json",
            data: JSON.stringify(usuarioJSON),
            cache: false,
            error: function (){ msjDanger('CONEXION', "<strong>Se ha producido un error en la conexion</strong>"); }
        });
	}

}
