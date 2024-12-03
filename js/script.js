document.addEventListener("DOMContentLoaded", function () {

    //RELOGIOS
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
    
        if (document.querySelector('#clockLogado')) {
            document.querySelector('#clockLogado').textContent = `${hours}:${minutes}:${seconds}`;
        }
    
        if (document.querySelector('#clockDashboard')) {
            document.querySelector('#clockDashboard').textContent = `${hours}:${minutes}:${seconds}`;
        }
    }
    
    setInterval(updateClock, 1);

    //LINKS
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu .links-nav');
    navLinks.forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
    
    // //MENU HAMBURGUER
    // const hamburgerMenu = document.getElementById('hamburger-menu');
    // const linksdaNav = document.querySelectorAll('.links-nav');

    // hamburgerMenu.addEventListener('click', () => {
    //     hamburgerMenu.classList.toggle('open');
    //     linksdaNav.classList.toggle('open');
    // });

});
