$(document).ready(function() {
    // Asegúrate de que el botón tenga position relative o absolute en CSS
    $(document).keypress(function(e) {
        // Verificar si la tecla presionada es "l" o "L"
        if (e.key === 'l' || e.key === 'L') {
            let button = $('#cambiarColor');
            let currentLeft = parseInt(button.css('left')) || 0;
            // Mover 50px a la derecha
            button.css('left', (currentLeft + 50) + 'px');
        }
    });
});
