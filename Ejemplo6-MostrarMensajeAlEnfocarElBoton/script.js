$(document).ready(function() {
    //Cuando el botón reciba el foco
    $('#cambiarColor').focus(function() {
        $('#mensaje').text("¡El botón ahora está enfocado!");
    });
});