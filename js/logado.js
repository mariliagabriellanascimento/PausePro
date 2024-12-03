//TRADUCAO LOGADO
function translateToPortugueseLogado() {
  document.querySelector('button#botaoIniciar').textContent = 'Iniciar Jornada de Trabalho';
  
  document.querySelector('h5.modal-title').textContent = 'Confirmar Ação';
  document.querySelector('div.modal-body p').textContent = 'Tem certeza de que deseja iniciar sua jornada de trabalho?';
  document.querySelector('button#cancelarIniciar').textContent = 'Cancelar';
  document.querySelector('button#confirmarIniciar').textContent = 'Sim, Iniciar Jornada de Trabalho';
}

function translateToEnglishLogado() {
  document.querySelector('button#botaoIniciar').textContent = 'Start Workday';
  
  document.querySelector('h5.modal-title').textContent = 'Confirm Action';
  document.querySelector('div.modal-body p').textContent = 'Are you sure you want to start your workday?';
  document.querySelector('button#cancelarIniciar').textContent = 'Cancel';
  document.querySelector('button#confirmarIniciar').textContent = 'Yes, Start Workday';
}

//TRADUTOR LOGADO
const botaoTradutorLogado = document.getElementById('tradutorLogado');
let atualLinguagemLogado = 'en';

function traduzirLogado() {
  if (atualLinguagemLogado === 'en') {
      atualLinguagemLogado = 'pt';
      document.documentElement.lang = 'pt';
      translateToPortugueseLogado();
  } else {
      atualLinguagemLogado = 'en';
      document.documentElement.lang = 'en';
      translateToEnglishLogado();
  }
};

botaoTradutorLogado.addEventListener('click', traduzirLogado);