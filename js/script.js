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

    //MODAL NOTIFICACAO

    //LINKS
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu .links-nav');
    navLinks.forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
    
    //TRADUCOES
    //LOGIN 
    function translateToPortuguese() {

        document.querySelector('h1').textContent = 'Login do Funcionário';
        document.querySelector('label[for="employeeId"]').textContent = 'ID do Funcionário:';
        document.querySelector('input#employeeId').placeholder = 'Entre com seu ID do Funcionário';
        document.querySelector('label[for="password"]').textContent = 'Senha:';
        document.querySelector('input#password').placeholder = 'Entre com sua senha'; 
        document.querySelector('button#botaoLogar').textContent = 'Entrar';
        document.querySelector('div[id="error-message"]').textContent = 'Por favor, preencha todos os campos.';


        const carrosselTexts = document.querySelectorAll('.item-carrossel-login p');
        carrosselTexts[0].textContent = 'Empoderando seu dia de trabalho, um check-in de cada vez.';
        carrosselTexts[1].textContent = 'Acompanhamento sem interrupções para você ser mais produtivo.';
        carrosselTexts[2].textContent = 'Fique no horário, mantenha o controle.';
        carrosselTexts[3].textContent = 'Transformando o ponto de entrada em eficiência.';
        carrosselTexts[4].textContent = 'Seu tempo importa, faça cada segundo valer.';  
    }
    
    function translateToEnglish() {

        document.querySelector('h1').textContent = 'Employee Login';
        document.querySelector('label[for="employeeId"]').textContent = 'Employee ID:';
        document.querySelector('input#employeeId').placeholder = 'Enter your employee ID'; 
        document.querySelector('label[for="password"]').textContent = 'Password:';
        document.querySelector('input#password').placeholder = 'Enter your password'; 
        document.querySelector('button#botaoLogar').textContent = 'Login';
        document.querySelector('div[id="error-message"]').textContent = 'Please fill out this field.';

        const carrosselTexts = document.querySelectorAll('.item-carrossel-login p');
        carrosselTexts[0].textContent = 'Empowering your workday, one check-in at a time.';
        carrosselTexts[1].textContent = 'Seamless tracking for a more productive you.';
        carrosselTexts[2].textContent = 'Stay on time, stay in control.';
        carrosselTexts[3].textContent = 'Transforming attendance into efficiency.';
        carrosselTexts[4].textContent = 'Your time matters, make every second count.';
    }
    
    //TRADUTOR
    const botaoTradutor = document.getElementById('tradutor');
    let atualLinguagem = 'en';

    botaoTradutor.addEventListener('click', () => {
        if (atualLinguagem === 'en') {
            atualLinguagem = 'pt';
            document.documentElement.lang = 'pt';
            translateToPortuguese();
        } else {
            atualLinguagem = 'en';
            document.documentElement.lang = 'en';
            translateToEnglish();
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



