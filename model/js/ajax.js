"use strict";

// CREA PETICION - LLAMA PHP - CUANDO RECIBE RESPUESTA MONTA FUNCION Y LA LLAMA
// URL: PAGINA A LA QUE LLAMA
// PARAMETER: VARIABLES Y SUS VALORES (COMO GET IMPLICITO)
function ajaxQuery(url, parameter, nameResultFunction, method, usarxml) {
    let  ajaxConnection = newAjaxConnection();

    if(trim (method.toUpperCase())=='POST' )  { requestPOST(url, parameter, ajaxConnection, usarxml); }
    else { requestGET(url, parameter, ajaxConnection); }

    ajaxConnection.onreadystatechange  = function () { responseAjax(ajaxConnection, nameResultFunction); }
}

function responseAjax(ajaxConnection, nameResultFunction, usarxml){
    if(ajaxConnection.readyState == 4) {
        if(ajaxConnection.status == 200) {
            let queryRessult = ajaxConnection.responseText;
            if(usarxml ==1)  { queryRessult = ajaxConnection.responseXML; }
            eval(nameResultFunction  + '(queryRessult)');
        }
        else { msjDanger("Error de conexion"); }
    }
}

function newAjaxConnection() {
    let ajaxConnection = "";
    try { ajaxConnection = new XMLHttpRequest(); } /* e.j. Firefox */
    catch(err1) {
        try { ajaxConnection = new ActiveXObject("Msxml2.XMLHTTP"); } /*  some versions IE */
        catch(err2) {
            try { ajaxConnection = new ActiveXObject("Microsoft.XMLHTTP"); } /* some versions IE */
            catch(err3) { ajaxConnection =  false; }
        }
    }
    return ajaxConnection;
}

function requestGET(url, parameter, ajaxConnection) {
    let myRand = parseInt(Math.random()*99999999);
    ajaxConnection.open("GET",url+'?'+parameter+'&rand='+myRand,true);
    ajaxConnection.send(null);
}

function requestPOST(url, parameter, ajaxConnection) {
    ajaxConnection.open("POST", url, true);
    ajaxConnection.setRequestHeader('Content-Type',  'application/x-www-form-urlencoded');
    ajaxConnection.send(parameter);
}

function trim (myString){ return myString.replace(/^\s+/g,'').replace(/\s+$/g,'') }