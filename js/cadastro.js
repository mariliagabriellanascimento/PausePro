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

//TRADUCOES CADASTRO
function translateToPortugueseCadastro() {
    document.querySelector('.tituloemployeeRegistration').textContent = 'Cadastro de Funcionário';
    document.querySelector('label[for="employeeName"]').textContent = 'Nome do Funcionário:';
    document.querySelector('input#employeeName').placeholder = 'Digite o seu nome';
    document.querySelector('label[for="employeeId"]').textContent = 'ID do Funcionário:';
    document.querySelector('input#employeeId').placeholder = 'Digite seu ID do Funcionário';
    document.querySelector('label[for="password"]').textContent = 'Senha:';
    document.querySelector('input#password').placeholder = 'Digite uma senha';
    document.querySelector('button#botaoCadastrar').textContent = 'Cadastrar';
    document.querySelector('div[id="error-message"]').textContent = 'Por favor, preencha todos os campos.';
    localStorage.setItem('language', 'pt');
}

function translateToEnglishCadastro() {
    document.querySelector('.tituloemployeeRegistration').textContent = 'Employee Registration';
    document.querySelector('input#employeeName').placeholder = 'Enter your name';
    document.querySelector('label[for="employeeId"]').textContent = 'Employee ID:';
    document.querySelector('input#employeeId').placeholder = 'Enter your employee ID';
    document.querySelector('label[for="password"]').textContent = 'Password:';
    document.querySelector('input#password').placeholder = 'Enter your password';
    document.querySelector('button#botaoCadastrar').textContent = 'Register';
    document.querySelector('div[id="error-message"]').textContent = 'Please fill out this field.';
    localStorage.setItem('language', 'en');
}

//TRADUTOR CADASTRO
const botaoTradutorCadastro = document.getElementById('tradutorCadastro');
let atualLinguagemCadastro = localStorage.getItem('language') || 'en';

if (atualLinguagemCadastro === 'pt') {
    translateToPortugueseCadastro();
} else {
    translateToEnglishCadastro();
}

function traduzirCadastro() {
    if (atualLinguagemCadastro === 'en') {
        atualLinguagemCadastro = 'pt';
        document.documentElement.lang = 'pt';
        translateToPortugueseCadastro();
    } else {
        atualLinguagemCadastro = 'en';
        document.documentElement.lang = 'en';
        translateToEnglishCadastro();
    }
    localStorage.setItem('language', atualLinguagemCadastro);
}

botaoTradutorCadastro.addEventListener('click', traduzirCadastro);