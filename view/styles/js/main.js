"use strict";

/*
    Lightbox para galeria
----------------------------------------------------- */
$('#lightbox').on('show.bs.modal', function (event) {
    // Obtener elementos
    var button = $(event.relatedTarget); // obtener elemento <a> con datos
    var nombre = button.data('nombre'); // obtener valor de atributo "data-nombre"
    var modal = $(this); // elemento modal lightbox

    // Obtener datos de la imagen
    var img = $(button).find('img'); // obtener elemento <img> hijo de <a>
    var src = $(img).attr("src"); // obtener src de <img>
    var alt = $(img).attr("alt"); // obtener alt de <img>

    // Establecer datos del modal
    modal.find('.modal-title').text(nombre); // cambiar valor de elemento con clase "modal-title"
    modal.find('img').attr('src', src); // establecer valor ruta imagen
    modal.find('img').attr('alt', alt);
});

/*
    Tabla checkbox
----------------------------------------------------------------- */
$(window).ready(function() {
    $('.tabla-checkbox tr')
        .filter(':has(:checkbox:checked)')
        .addClass('selected')
        .end()
        .click(function(event) {
            if (event.target.type !== 'checkbox') {
                $(':checkbox', this).trigger('click');
            }
        })
        .find(':checkbox')
        .click(function(event) {
            $(this).parents('tr:first').toggleClass('selected');
        });
});

/*
    Datepicker JQUERY
------------------------------------------------------------------ */