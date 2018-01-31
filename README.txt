JORGE COSTA MACIA

Aplicación web utilizando API-REST y JS
--------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------

Funcionalidades de la aplicacion
---------------------------------

La finalidad de la aplicación es gestionar las faltas de los profesores.

Permite solocitar permisos, gestionarlos y justificarlos.

También permite la subida de documentación (anexos) y visión de anexos subidos.

Existen 3 usuarios diferentes:
	Usuario: Puede crear peticiones y justificarlas.
    Direccion: Usuario + Autorizar/denegar permisos y añadir comentarios a
    las peticiones.
	Admin: Direccion + Autorizar login.

El usuario debe registrarse y pedir que le autoricen el alta.

El usuario admin ya esta creado en la base dedatos.

Una vez en la aplicación podremos:

Ver nuestros permisos o justificantes.

Ver el registro de log.

Si somos admin podremos ver los registros pendientes y gestionarlos.

Solicitar un nuevo permiso, el cual deberá ser autorizado por dirección o admin.

Si somos admin o dirección además podremos autorizar o rechazar permisos y añadir comentarios a los permisos.

Imprimir nuestros permisos o justificantes.

Si nuestro justificante o permiso esta guardado y no ha sido enviado, además de ser nosotros el propietario de ese permiso, podremos editarlo.

Una vez enviado a pendiente de autorizar ya no podrá ser editado.

Tampoco podremos editarlo una vez este en la cola de finalizados.

Los campos nombre, firma y fecha se auto rellenan con los datos del usuario logeado, de esta forma evitamos que se puedan crear permisos a diferente usuario y que no se puedan pedir permisos con fechas anteriores a la actual.

En todo momento podremos ver los comentarios y anexos de los permisos.


--------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------

Aspectos tecnicos:
--------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------

Esta desarrollada para un servidor API-REST con Node.JS, NPM  y JSON-SERVER.

Modelo utilizado MVC
Lenguajes utilizados: Javascript y Jquery
Tipo bd: No relaciona, json
El aspecto esta implementado en bootstrap4 y ficheros propios
Los ficheros subidos se almacenan en base64
El control de acceso se realiza mediante login y coincidencia de token almacenado en bd con token almacenado en cookie

A tener en cuenta:
--------------------
En caso de utilizarla en localhost solo nos funcionara con Firefox, chrome no admite creación de cookies de forma local.
Si queremos utilizarlo de forma local desde chrome deberemos implementar un servidor remoto.


Esta distribuida en 3 apartados (directorios):
----------------------------------------------
	Controller:
		Ficheros que actúan como controlador en la aplicación.

        A su vez, este fichero esta subdividido en directorios según la pagina con la tengan relación.

        Tambien cuenta con un directorio src que incluce:
	        Bd:
                Aquí encontraremos la bd con la que interactuamos, una base de datos por defecto, el contenido que tendrá cada tabla y un ejemplo de una base de datos con contenido.
			Libraries:
				Ficheros de librerías utilizadas en la aplicación
	Model:
		Ficheros que actúan como modelo de la aplicación.

		classApp:
            Cuenta con una clase principal gestor
            Encargado de hacer las gestiones generales en la aplicación, además cuenta con los métodos necesarios para el almacenamiento y control tanto en localstorage como en cookies.
		classEntities:
			Cuenta con una clase por cada tabla.
            Los objetos se crean en base a un a los atributos de un JSON que recibe el constructor.
		classEntitiesManager:
			Cuenta con una clase por cada tabla.
			Cada clase es la encargada de realizar los accesos a la bd.

    View:
		Ficheros que actúan como vista de la aplicación.

		Además cuenta con las distintas paginas de la aplicación

            Js:
                Ficheros encargados de la inyección y gestión de las vistas
            Src:
                Recursos utilizados en la creación de la vista de la página.
            Styles:
                Ficheros encargados del estilo de la pagina