// Ejemplo: Cambiar el color de fondo aleatorioamente
$(document).ready(function() {
    $('#cambiarColor').click(function() {
        //Cambiar el color de fondo de la página a un color aleatorio
        let colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F5E10C'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        $('body').css('background-color', randomColor);
    })
});

