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
    JQuery para controlar el estilo del navbar
-------------------------------------------------------------------------*/
$(window).ready(function() {

    const MIN_ANCHO = 992; // px
    const MIN_DESPL = 10;

    controlNavbar(MIN_DESPL, MIN_ANCHO);

    // Al mover el scroll
    $(window).scroll(function() {
        controlNavbar(MIN_DESPL, MIN_ANCHO);
    });

    // Al cambiar tamaño de la ventana
    $(window).resize(function() {
        controlNavbar(MIN_DESPL, MIN_ANCHO);
    });

});

function controlNavbar(minDespl, minAncho){
    if ($(document).width() > minAncho && $(document).scrollTop() <= minDespl){
        $('#nav-inicio').removeClass('navbar-small');
        navTrans();
    } else {
        $('#nav-inicio').removeClass('navbar-small');
        $('#nav-inicio').addClass('navbar-small');
        navBlanco();
    }
}

function navBlanco(){
    $('#nav-inicio').removeClass('grad-black-totop');
    $('#nav-inicio').addClass('navbar-light').addClass('bg-light');
    $('#nav-inicio').removeClass('navbar-dark').removeClass('bg-transparent');

}

function navTrans() {
    $('#nav-inicio').addClass('grad-black-totop');
    $('#nav-inicio').addClass('navbar-dark').addClass('bg-transparent');
    $('#nav-inicio').removeClass('navbar-light').removeClass('bg-light');
}

