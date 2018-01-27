"use strict";

class UsuarioManager {
	getUsuario(idUsuario, returnFunction){
		$.ajax({
			url:"http://localhost:3000/usuarios",
			type:"GET",
			data: 'id=' + idUsuario,
            cache: false,
            error: function (){ msjDanger("Se ha producido un error en la conexion"); },
            success: function(ressult){ eval(returnFunction + '(ressult)'); }
		});
	}
	addUsuario(id, nombre, departamento, nivel){
        $.ajax({
            url:"http://localhost:3000/usuarios",
            type:"POST",
            data: 'id=' + id + '&nombre=' + nombre + '&departamento=' + departamento + '&nivel=' + nivel,
            cache: false,
            error: function (){ msjDanger("Se ha producido un error en la conexion"); },
        });
	}

}
