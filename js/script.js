let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carrossel-item');
    const totalItems = items.length;

    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    const offset = -currentIndex * 100; 
    document.querySelector('.carousel-interno').style.transform = `translateX(${offset}%)`;
}

document.body.style.fontFamily = "'Montserrat', sans-serif";
