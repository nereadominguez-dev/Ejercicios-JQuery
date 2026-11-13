//Ejemplo: cambiar color de botón al pasar el ratón
$(document).ready(function() {
    $('#cambiarColor').mouseenter(function(){
        $(this).css('background-color','#FF5733'); //cambia al pasar el ratón
    });
    $('#cambiarColor').mouseleave(function(){
        $(this).css('background-color',''); //vuelve al color original al salir
    });
});