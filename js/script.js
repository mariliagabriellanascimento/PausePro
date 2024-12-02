document.addEventListener("DOMContentLoaded", function () {

    //LOGIN
    const botaoLogin = document.querySelector("#botaoLogar");
    function logar() {
        const employeeId = document.querySelector("#employeeId").value;
        const password = document.querySelector("#password").value;
        
        if (employeeId.trim() && password.trim()) {
            window.location.href = "./pags/logado.html";
        } else {
            alert("Please fill in all fields.");
        }
    }

    if (botaoLogin) {
        botaoLogin.addEventListener("click", logar);
    }

    //CARROSSEL LOGIN
    const carrosselLogin = document.querySelector(".carrossel-interno-login");
    const itensLogin = document.querySelectorAll(".item-carrossel-login");
    let indiceAtualCarrosselLogin = 0;
    
    function moverCarrosselLogin() {
        itensLogin.forEach(item => item.style.display = 'none');
    
        itensLogin[indiceAtualCarrosselLogin].style.display = 'block';
    }
    
    const botaoAnteriorLogin = document.querySelector(".carrossel-login-anterior");
    const botaoProximoLogin = document.querySelector(".carrossel-login-proximo");
    
    if (botaoAnteriorLogin && botaoProximoLogin) {
        botaoAnteriorLogin.addEventListener("click", () => {

            indiceAtualCarrosselLogin--;
            if (indiceAtualCarrosselLogin < 0) {
                indiceAtualCarrosselLogin = itensLogin.length - 1;
            }
            moverCarrosselLogin();
        });
    
        botaoProximoLogin.addEventListener("click", () => {

            indiceAtualCarrosselLogin++;
            if (indiceAtualCarrosselLogin >= itensLogin.length) {
                indiceAtualCarrosselLogin = 0; 
            }
            moverCarrosselLogin();
        });
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        moverCarrosselLogin(); 
    });
    
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
    
    setInterval(updateClock, 1000);

    //LINKS
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu .links-nav');
    navLinks.forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });

    // MODAIS
    // MODAL INICIAR
    function abrirModalInicio() {
        document.getElementById("modalIniciar").style.display = "block";
    }

    function fecharModalInicio() {
        document.getElementById("modalIniciar").style.display = "none";
    }

    function confirmarIniciar() {
        window.location.href = "verificacao.html";
    }

    document.getElementById("botaoIniciar")?.addEventListener("click", abrirModalInicio);
    document.getElementById("cancelarIniciar")?.addEventListener("click", fecharModalInicio);
    document.querySelector(".closeIniciar")?.addEventListener("click", fecharModalInicio);
    document.getElementById("confirmarIniciar")?.addEventListener("click", confirmarIniciar);

    // MODAL PAUSAR
    function abrirModalPausar() {
        document.getElementById("modalPausar").style.display = "block";
    }

    function fecharModalPausar() {
        document.getElementById("modalPausar").style.display = "none";
    }

    function confirmarPausar() {
        pausaAtiva = true;
        
        document.getElementById("botaoPausar").disabled = true;
        document.getElementById("botaoRetomar").disabled = false;

        fecharModalPausar();
    }

    document.getElementById("botaoPausar")?.addEventListener("click", abrirModalPausar);
    document.getElementById("cancelarPausar")?.addEventListener("click", fecharModalPausar);
    document.querySelector(".closePausar")?.addEventListener("click", fecharModalPausar);
    document.getElementById("confirmarPausar")?.addEventListener("click", confirmarPausar);

    // MODAL RETOMAR
    function abrirModalRetomar() {
        document.getElementById("modalRetomar").style.display = "block";
    }

    function fecharModalRetomar() {
        document.getElementById("modalRetomar").style.display = "none";
    }

    function confirmarRetomar() {
        pausaAtiva = false;
        
        document.getElementById("botaoPausar").disabled = false;
        document.getElementById("botaoRetomar").disabled = true;

        fecharModalRetomar();
    }

    document.getElementById("botaoRetomar")?.addEventListener("click", abrirModalRetomar);
    document.getElementById("cancelarRetomar")?.addEventListener("click", fecharModalRetomar);
    document.querySelector(".closeRetomar")?.addEventListener("click", fecharModalRetomar);
    document.getElementById("confirmarRetomar")?.addEventListener("click", confirmarRetomar);

    // MODAL FINALIZAR
    function abrirModalFinalizar() {
        document.getElementById("modalFinalizar").style.display = "block";
    }

    function fecharModalFinalizar() {
        document.getElementById("modalFinalizar").style.display = "none";
    }

    function confirmarFinalizar() {
        window.location.href = "verificacao.html";
    }

    document.getElementById("botaoFinalizar")?.addEventListener("click", abrirModalFinalizar);
    document.getElementById("cancelarFinalizar")?.addEventListener("click", fecharModalFinalizar);
    document.querySelector(".closeFinalizar")?.addEventListener("click", fecharModalFinalizar);
    document.getElementById("confirmarFinalizar")?.addEventListener("click", confirmarFinalizar);

    // MODAL EXTRA
    function abrirModalExtra() {
        document.getElementById("modalExtra").style.display = "block";
    }

    function fecharModalExtra() {
        document.getElementById("modalExtra").style.display = "none";
    }

    function confirmarExtra() {
        // Implementar ação de confirmar se necessário
    }

    document.getElementById("botaoExtra")?.addEventListener("click", abrirModalExtra);
    document.getElementById("cancelarExtra")?.addEventListener("click", fecharModalExtra);
    document.querySelector(".closeExtra")?.addEventListener("click", fecharModalExtra);
    document.getElementById("confirmarExtra")?.addEventListener("click", confirmarExtra);



    //RELATORIOS
    document.querySelectorAll('.secao-relatorio h2').forEach(function (header) {
        header.addEventListener('click', function () {
            const table = header.nextElementSibling;
            const arrow = header.querySelector('span');
    
            document.querySelectorAll('.secao-relatorio .tabela-horas-trabalhadas, .secao-relatorio .tabela-pausas, .secao-relatorio .tabela-faltas').forEach(function (otherTable) {
                if (otherTable !== table) {
                    otherTable.style.display = 'none';
                    const otherArrow = otherTable.previousElementSibling.querySelector('span');
                    otherArrow.innerHTML = '&#9662';
                }
            });
    
            if (table.style.display === 'block') {
                table.style.display = 'none';
                arrow.innerHTML = '&#9662';
            } else {
                table.style.display = 'block';
                arrow.innerHTML = '&#9652';
            }
        });
    });
    

    //TRADUCOES
    //LOGIN
    function translateToPortuguese() {
        // Aqui você troca o conteúdo de textos para português
        document.querySelector('h1').textContent = 'Login do Funcionário';  // Exemplo
        document.querySelector('label[for="employeeId"]').textContent = 'ID do Funcionário:';
        document.querySelector('label[for="password"]').textContent = 'Senha:';
        document.querySelector('button#botaoLogar').textContent = 'Entrar';
        // Adicione as traduções para o restante do conteúdo
    }
    
    function translateToEnglish() {
        // Aqui você troca o conteúdo de textos para inglês
        document.querySelector('h1').textContent = 'Employee Login';  // Exemplo
        document.querySelector('label[for="employeeId"]').textContent = 'Employee ID:';
        document.querySelector('label[for="password"]').textContent = 'Password:';
        document.querySelector('button#botaoLogar').textContent = 'Login';
        // Adicione as traduções para o restante do conteúdo
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



