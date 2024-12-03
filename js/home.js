//TRADUCAO HOME
function translateToPortugueseHome() {

  document.querySelector('.titulo-home').textContent = 'Ponto Atual';
  document.querySelector('#ponto-status').textContent = 'Último ponto: 08:00 AM';
  
  const navLinks = document.querySelectorAll('.links-nav');
  navLinks[0].textContent = 'INÍCIO';
  navLinks[1].textContent = 'HISTÓRICO DE PONTOS';
  navLinks[2].textContent = 'RELATÓRIOS';
  
  document.querySelector('#botaoPausar').textContent = 'Pausar';
  document.querySelector('#botaoRetomar').textContent = 'Retomar';
  document.querySelector('#botaoFinalizar').textContent = 'Finalizar';
  document.querySelector('#botaoExtra').textContent = 'Hora Extra';
  
  document.querySelector('.modal-title').textContent = 'Pausar Trabalho';
  document.querySelector('.modal-body p').textContent = 'Tem certeza que deseja pausar seu trabalho?';
  document.querySelector('.botaoModal.cancelar').textContent = 'Cancelar';
  document.querySelector('.botaoModal.confirmar').textContent = 'Sim, Pausar Trabalho';
  
  document.querySelector('.rodape p').textContent = 'PausePro@ 2024 Sistema de Controle de Ponto - Todos os direitos reservados.';
  document.querySelectorAll('.links-rodape a')[0].textContent = 'Política de Privacidade';
  document.querySelectorAll('.links-rodape a')[1].textContent = 'Termos de Uso';
  document.querySelector('.conteudo-rodape p:nth-child(3)').textContent = 'Desenvolvido por Verdinhos';
}

function translateToEnglishHome() {

  document.querySelector('.titulo-home').textContent = 'Current Punch Time';
  document.querySelector('#ponto-status').textContent = 'Last punch: 08:00 AM';
  
  const navLinks = document.querySelectorAll('.links-nav');
  navLinks[0].textContent = 'HOME';
  navLinks[1].textContent = 'ATTENDANCE HISTORY';
  navLinks[2].textContent = 'REPORTS';
  
  document.querySelector('#botaoPausar').textContent = 'Pause';
  document.querySelector('#botaoRetomar').textContent = 'Resume';
  document.querySelector('#botaoFinalizar').textContent = 'Finish';
  document.querySelector('#botaoExtra').textContent = 'Overtime';
  
  document.querySelector('.modal-title').textContent = 'Pause Work';
  document.querySelector('.modal-body p').textContent = 'Are you sure you want to pause your work?';
  document.querySelector('.botaoModal.cancelar').textContent = 'Cancel';
  document.querySelector('.botaoModal.confirmar').textContent = 'Yes, Pause Work';
  
  document.querySelector('.rodape p').textContent = 'PausePro@ 2024 Time Tracking System - All rights reserved.';
  document.querySelectorAll('.links-rodape a')[0].textContent = 'Privacy Policy';
  document.querySelectorAll('.links-rodape a')[1].textContent = 'Terms of Use';
  document.querySelector('.conteudo-rodape p:nth-child(3)').textContent = 'Developed by Verdinhos';
}

//TRADUTOR HOME
const translationButton = document.getElementById('tradutordashboardHome');
let currentLanguageHome = 'en';

function traduzirHome() {
  if (currentLanguageHome === 'en') {
      currentLanguageHome = 'pt';
      document.documentElement.lang = 'pt';
      translateToPortugueseHome();
  } else {
      currentLanguageHome = 'en';
      document.documentElement.lang = 'en';
      translateToEnglishHome();
  }
}

translationButton.addEventListener('click', traduzirHome);
