"use strict";

class Gestor{
    constructor(){
        var logins = [];
        var usuarios = [];
        var peticiones = [];

    }




}




public function getUsuarioLogin($_connection){
    $nick = trim(strtoupper($_POST["nick"]));
    $pass = null;
    if (isset($_POST["pass"])) {
        $pass = trim(strtoupper($_POST["pass"]));
    }

    if (esTexto($nick) && (esTexto($pass) || $pass == null)) {
        $plusWhere = "";
        if ($pass != null) { $plusWhere = 'AND pass="' . $pass . '"'; }
        $_ressult = $_connection->_select('*', 'LOGIN', 'WHERE nick="' . $nick . '" ' . $plusWhere);
        if (isset($_ressult["ressult"])) { $this->setLogins($_connection->format_select_Object($_ressult["ressult"], "Login")); }
        else if (isset($_ressult["error"])) {
            $this->addErrores(new Error("Se ha producido un error durante el login"));
            $this->addErrores($_ressult["error"]);
        }
    }
    else { $this->addErrores(new Error('Formato incorrecto de los campos nick y pass')); }
}

public function addLogin($_connection){
    $nick = trim(strtoupper($_POST["nick"]));
    $pass = trim(strtoupper($_POST["pass"]));

    if (esTexto($nick) && esTexto($pass)) {
        $_ressult = $_connection->_insert('LOGIN', '("' . $nick . '","' . $pass . '")');
        if (isset($_ressult["ressult"])) { $this->setVarios($_ressult); }
        else if (isset($_ressult["error"])) {
            $this->addErrores(new Error("Se ha producido un error durante el registro"));
            $this->addErrores($_ressult["error"]);
        }
    }
    else { $this->addErrores(new Error('Formato incorrecto de los campos nick y pass', "", "")); }
}
