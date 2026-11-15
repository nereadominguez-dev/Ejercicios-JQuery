$(document).ready(function() {
    //Cuando el ratón salga del botón
    $('#cambiarColor').mouseleave(function() {
        $('#mensaje').text("¡Has salido del botón!");
    });
});