const images = [
        'img_fondo/factura1.jpg',
        'img_fondo/factura2.jpg',
        'img_fondo/factura3.jpg',
        'img_fondo/factura4.jpg'
    ];

    let currentIndex1 = 0;

    function changeBackground() {
        document.body.style.backgroundImage = `url('${images[currentIndex1]}')`;
        currentIndex1 = (currentIndex1 + 1) % images.length;
    }

// Cambiar fondo cada 4 segundos
changeBackground(); // Mostrar la primera imagen al cargar
setInterval(changeBackground, 4000);