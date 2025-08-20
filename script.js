const array = [
    '<img src="Juan.png" alt="Juan Pablo">',
    '<img src="Nico.png" alt="Nico">',
    '<img src="Edu.png" alt="Eduardo">',
    '<img src="Ale.png" alt="Ale">',
    '<img src="Marcos.png" alt="Marcos">',
    '<img src="Milton.png" alt="Milton">'    
];

// Fecha de inicio: 28/07/2025
const startDate = new Date('2025-07-28T08:15:00');

function updateContent() {
    const imageContainer = document.getElementById('image-container');
    const dateContainer = document.getElementById('date-container');
    const nextWeekDateContainer = document.getElementById('next-week-date');
    const nextWeekImageContainer = document.getElementById('next-week-image-container');

    // Calcula cuántas semanas han pasado desde la fecha de inicio
    const today = new Date();
    const timeDiff = today.getTime() - startDate.getTime();
    const weeksPassed = Math.floor(timeDiff / (7 * 24 * 60 * 60 * 1000));
    const currentIndex = weeksPassed % array.length;

    // Actualiza la imagen basada en las semanas transcurridas
    imageContainer.innerHTML = array[currentIndex];

    // Calcula la fecha del próximo viernes
    const nextFriday = new Date(today);
    nextFriday.setDate(today.getDate() + (5 - today.getDay() + 7) % 7);
    nextFriday.setHours(8, 15, 0, 0);

    // Formatea la fecha
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    dateContainer.innerHTML = nextFriday.toLocaleDateString('es-ES', options);

    // Calcula la fecha del viernes siguiente
    const nextNextFriday = new Date(nextFriday);
    nextNextFriday.setDate(nextFriday.getDate() + 7);
    nextNextFriday.setHours(8, 15, 0, 0);
    nextWeekDateContainer.innerHTML = nextNextFriday.toLocaleDateString('es-ES', options);

    // Actualiza la imagen de la próxima semana
    const nextIndex = (currentIndex + 1) % array.length;
    nextWeekImageContainer.innerHTML = array[nextIndex];

}

// Actualiza el contenido inmediatamente y luego cada semana (604800000 ms)
updateContent();
setInterval(updateContent, 604800000);



