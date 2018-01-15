<?php

/* Datos de usuario creado para las pruebas
-----------------------------------------
usuario: usu
conraseña: usu

*La contraaseña se almacena en formato hash en el objeto usuario $_SESSION['usuario']->pass

 */

include_once "scripts/funcionesBBDD.php";

// Conectar a la base de datos
$conexion = conectar();

// Controlar sesión y logeo
include "scripts/sesion.php";

// Controlar errores
include "scripts/errores.php";


include("secciones/top_page.php");
?>
    <div id="contenedor" class="container-fluid">
        <div id="header">
            <?php //include("secciones/header.php"); ?>
        </div>
        <div id="contenido" class="row">

            <!-- Menú fijo -->
            <?php if(isset($_SESSION['usuario'])) include("secciones/menu.php"); ?>

            <!-- Contenido principal -->
            <main class="col">
                <?php
                // Controlar alertas
                include "scripts/alertas.php";

                // Contenido
                include("scripts/pages.php");
                ?>
            </main>

        </div>
        <div id="footer">
            <?php include("secciones/footer.php"); ?>
        </div>
    </div>

<?php include("secciones/bottom_page.php"); ?>

<?php

desconectar($conexion);

// CONTROLES PHP AL FINAL DE PÁGINA

/*
    Controles de sesión
----------------------------------- */
if (isset($_SESSION)){

    // Vaciar array de errores, alertas y campos para que no se acumulen
    unset($_SESSION['errores']);
    unset($_SESSION['alertas']);
    unset($_SESSION['campos']);

}
?>
