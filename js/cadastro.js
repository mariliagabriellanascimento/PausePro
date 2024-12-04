//CADASTRO
const botaoCadastrar = document.querySelector("#botaoCadastrar");
const cadastroForm = document.querySelector("#cadastro-form");
const errorMessage = document.querySelector("#error-message");

function cadastrar(cadastrando) {
    cadastrando.preventDefault();

    const name = document.querySelector("#employeeName");
    const employeeId = document.querySelector("#employeeId");
    const password = document.querySelector("#password");

    if (name.checkValidity() && employeeId.checkValidity() && password.checkValidity()) {
        errorMessage.style.display = 'none';
        window.location.href = "./pags/login.html";
    } else {
        errorMessage.style.display = 'block';
    }
}

if (botaoCadastrar) { 
    botaoCadastrar.addEventListener("click", cadastrar);
}
