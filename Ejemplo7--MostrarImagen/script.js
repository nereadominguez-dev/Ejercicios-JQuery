$(document).ready(function() {
    //Cuando el ratón entre en el botón
    $('#cambiarColor').mouseenter(function() {
        //Cambiar el contenido del div con id "mensaje" por una imagen
        $('#mensaje').html('<img src="caballito.png" alt="Caballito">');
    });
});