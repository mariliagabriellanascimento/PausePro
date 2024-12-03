//LOGIN
const botaoLogin = document.querySelector("#botaoLogar");
const loginForm = document.querySelector("#loginForm");
const errorMessage = document.querySelector("#error-message");


function logar(evento) {
evento.preventDefault();

const employeeId = document.querySelector("#employeeId");
const password = document.querySelector("#password");

if (employeeId.checkValidity() && password.checkValidity()) {
    errorMessage.style.display = 'none';
    window.location.href = "./pags/logado.html";
} else {
    errorMessage.style.display = 'block';
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