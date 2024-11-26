//RELOGIO
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

//CARROSSEL LOGIN
const carrosselLogin = document.querySelector(".carrossel-interno-login");
const itensLogin = document.querySelectorAll(".item-carrossel-login");
let indiceAtualCarrosselLogin = 0;

function moverCarrosselLogin() {
    indiceAtualCarrosselLogin++;

    if (indiceAtualCarrosselLogin < 0) {
        indiceAtualCarrosselLogin = itensLogin.length - 1;
    } else if (indiceAtualCarrosselLogin >= itensLogin.length) {
        indiceAtualCarrosselLogin = 0;
    }

    carrosselLogin.style.transform = `translateX(-${indiceAtualCarrosselLogin * 100}%)`;
}

//CARROSSEL HOME
const carrosselHome = document.querySelector(".carrossel-interno-home");
const itensHome = document.querySelectorAll(".item-carrossel-home");
let indiceAtualCarrosselHome = 0;

function moverCarrosselHome() {
    indiceAtualCarrosselHome++;

    if (indiceAtualCarrosselHome < 0) {
        indiceAtualCarrosselHome = itensHome.length - 1;
    } else if (indiceAtualCarrosselHome >= itensHome.length) {
        indiceAtualCarrosselHome = 0;
    }

    carrosselHome.style.transform = `translateX(-${indiceAtualCarrosselHome * 100}%)`;
}

//RELATORIOS
document.querySelectorAll('.secao-relatorio h2').forEach(function(header) {
    header.addEventListener('click', function() {
        const table = header.nextElementSibling;

        if (table.style.display === 'none' || table.style.display === '') {
            table.style.display = 'block';
        } else {
            table.style.display = 'none';
        }

        const arrow = header.querySelector('span');
        if (table.style.display === 'block') {
            arrow.innerHTML = '&#9652';
        } else {
            arrow.innerHTML = '&#9662';
        }
    });
});
