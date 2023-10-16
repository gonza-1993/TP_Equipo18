document.addEventListener("DOMContentLoaded", function() {
    // Encuentra los elementos con la clase "text-image"
    var textImages = document.querySelectorAll(".text-image");
    
    // Agrega la clase "show" a cada elemento con un retraso
    textImages.forEach(function(textImage, index) {
        setTimeout(function() {
            textImage.classList.add("show");
        }, index * 1000); // Cambia el valor de 1000 según la duración de tu animación
    });
});


function agregado_carrito(){
    alert("Agregado correctamente al carrito")
}