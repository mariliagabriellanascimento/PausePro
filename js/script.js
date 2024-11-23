// Atualiza o relógio
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

// Funcionalidade dos botões de ponto
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const finishBtn = document.getElementById('finishBtn');
const extraBtn = document.getElementById('extraBtn');
const workedHours = document.getElementById('workedHours');

let punchStatus = 'working';
let startTime = new Date();
let totalWorked = 0;

pauseBtn.addEventListener('click', () => {
    punchStatus = 'paused';
    pauseBtn.disabled = true;
    resumeBtn.disabled = false;
    finishBtn.disabled = false;
});

resumeBtn.addEventListener('click', () => {
    punchStatus = 'working';
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;
    finishBtn.disabled = false;
});

finishBtn.addEventListener('click', () => {
    const now = new Date();
    totalWorked += (now - startTime) / 3600000;
    workedHours.textContent = `${totalWorked.toFixed(2)}h`;
    punchStatus = 'finished';
    pauseBtn.disabled = true;
    resumeBtn.disabled = true;
    finishBtn.disabled = true;
    extraBtn.style.display = 'block';
});

// Alternância de idioma (Inglês e Português)
const languageToggleBtn = document.querySelector('.toggle-language');

let currentLanguage = 'en';
languageToggleBtn.addEventListener('click', () => {
    if (currentLanguage === 'en') {
        currentLanguage = 'pt';
        document.documentElement.lang = 'pt';
        translateToPortuguese();
    } else {
        currentLanguage = 'en';
        document.documentElement.lang = 'en';
        translateToEnglish();
    }
});

// Tradução para português
function translateToPortuguese() {
    document.getElementById('home-link').textContent = 'Início';
    document.querySelector('.dashboard-header .user-role').textContent = 'Desenvolvedor Front-End';
    document.getElementById('punch-status').textContent = 'Último ponto: 08:00 AM';
    pauseBtn.textContent = 'Pausar';
    resumeBtn.textContent = 'Retomar';
    finishBtn.textContent = 'Encerrar Ponto';
    extraBtn.textContent = 'Hora Extra';
}

// Tradução para inglês
function translateToEnglish() {
    document.getElementById('home-link').textContent = 'Home';
    document.querySelector('.dashboard-header .user-role').textContent = 'Front-End Developer';
    document.getElementById('punch-status').textContent = 'Last punch: 08:00 AM';
    pauseBtn.textContent = 'Pause';
    resumeBtn.textContent = 'Resume';
    finishBtn.textContent = 'End Punch';
    extraBtn.textContent = 'Overtime';
}

// Funcionalidade do carrossel
const carouselItems = document.querySelectorAll('.carousel-item');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;

// Atualiza a exibição do carrossel
function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.style.display = index === currentIndex ? 'block' : 'none';
    });
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
});

// Inicializa o carrossel
updateCarousel();
