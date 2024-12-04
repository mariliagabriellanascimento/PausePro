//TRADUCAO HOME
function translateToPortugueseHome() {
  document.querySelector('.titulo-home').textContent = 'Ponto Atual';
  document.querySelector('#ponto-status').textContent = 'Último ponto: 08:00 AM';
  
  const navLinks = document.querySelectorAll('.links-nav');
  navLinks[0].textContent = 'HOME';
  navLinks[1].textContent = 'HISTÓRICO DE PONTOS';
  navLinks[2].textContent = 'RELATÓRIOS';

  const statusPontos = document.querySelectorAll('.ponto-status p');
  statusPontos[0].innerHTML = '<strong>Hora de Entrada:</strong> 08:00 AM';
  statusPontos[1].innerHTML = '<strong>Status:</strong> Em Expediente';
  statusPontos[2].innerHTML = '<strong>Horas Trabalhadas:</strong> <span id="horasTrabalhadas">1m</span>';
  
  document.querySelector('#botaoPausar').textContent = 'Pausar';
  document.querySelector('#botaoRetomar').textContent = 'Retomar';
  document.querySelector('#botaoFinalizar').textContent = 'Finalizar';
  document.querySelector('#botaoExtra').textContent = 'Hora Extra';
  
  document.querySelector('.modal-title').textContent = 'Pausar Trabalho';
  document.querySelector('.modal-body p').textContent = 'Tem certeza que deseja pausar seu trabalho?';
  document.querySelector('.botaoModal.cancelar').textContent = 'Cancelar';
  document.querySelector('.botaoModal.confirmar').textContent = 'Sim, Pausar Trabalho';

  document.querySelector('#modalRetomar .modal-title').textContent = 'Retomar Ponto';
  document.querySelector('#modalRetomar .modal-body p').textContent = 'Tem certeza que deseja retomar seu ponto?';
  document.querySelector('#modalRetomar .botaoModal.cancelar').textContent = 'Cancelar';
  document.querySelector('#modalRetomar .botaoModal.confirmar').textContent = 'Sim, Retomar Ponto';
  
  document.querySelector('#modalFinalizar .modal-title').textContent = 'Finalizar Ponto';
  document.querySelector('#modalFinalizar .modal-body p').textContent = 'Tem certeza que deseja finalizar seu ponto de trabalho?';
  document.querySelector('#modalFinalizar .botaoModal.cancelar').textContent = 'Cancelar';
  document.querySelector('#modalFinalizar .botaoModal.confirmar').textContent = 'Sim, Finalizar Ponto';
  
  document.querySelector('#modalExtra .modal-title').textContent = 'Registrar Hora Extra';
  document.querySelector('#modalExtra .modal-body p').textContent = 'Tem certeza que deseja registrar hora extra?';
  document.querySelector('#modalExtra .botaoModal.cancelar').textContent = 'Cancelar';
  document.querySelector('#modalExtra .botaoModal.confirmar').textContent = 'Sim, Registrar Hora Extra';
  
  document.querySelector('.rodape p').textContent = 'PausePro@ 2024 Sistema de Controle de Ponto - Todos os direitos reservados.';
  document.querySelectorAll('.links-rodape a')[0].textContent = 'Política de Privacidade';
  document.querySelectorAll('.links-rodape a')[1].textContent = 'Termos de Uso';
  document.querySelector('.conteudo-rodape p:nth-child(3)').textContent = 'Desenvolvido por Verdinhos';
  localStorage.setItem('language', 'pt');

}

function translateToEnglishHome() {

  document.querySelector('.titulo-home').textContent = 'Current Punch Time';
  document.querySelector('#ponto-status').textContent = 'Last punch: 08:00 AM';
  
  const navLinks = document.querySelectorAll('.links-nav');
  navLinks[0].textContent = 'HOME';
  navLinks[1].textContent = 'ATTENDANCE HISTORY';
  navLinks[2].textContent = 'REPORTS';

  const statusPontos = document.querySelectorAll('.ponto-status p');
  statusPontos[0].innerHTML = '<strong>Entry Time:</strong> 08:00 AM';
  statusPontos[1].innerHTML = '<strong>Status:</strong> At Work';
  statusPontos[2].innerHTML = '<strong>Hours Worked:</strong> <span id="horasTrabalhadas">1m</span>';
  
  document.querySelector('#botaoPausar').textContent = 'Pause';
  document.querySelector('#botaoRetomar').textContent = 'Resume';
  document.querySelector('#botaoFinalizar').textContent = 'Finish';
  document.querySelector('#botaoExtra').textContent = 'Overtime';
  
  document.querySelector('.modal-title').textContent = 'Pause Work';
  document.querySelector('.modal-body p').textContent = 'Are you sure you want to pause your work?';
  document.querySelector('.botaoModal.cancelar').textContent = 'Cancel';
  document.querySelector('.botaoModal.confirmar').textContent = 'Yes, Pause Work';

  document.querySelector('#modalRetomar .modal-title').textContent = 'Resume Punch';
  document.querySelector('#modalRetomar .modal-body p').textContent = 'Are you sure you want to resume your punch?';
  document.querySelector('#modalRetomar .botaoModal.cancelar').textContent = 'Cancel';
  document.querySelector('#modalRetomar .botaoModal.confirmar').textContent = 'Yes, Resume Punch';
  
  document.querySelector('#modalFinalizar .modal-title').textContent = 'Finish Punch';
  document.querySelector('#modalFinalizar .modal-body p').textContent = 'Are you sure you want to finish your workday punch?';
  document.querySelector('#modalFinalizar .botaoModal.cancelar').textContent = 'Cancel';
  document.querySelector('#modalFinalizar .botaoModal.confirmar').textContent = 'Yes, Finish Punch';
  
  document.querySelector('#modalExtra .modal-title').textContent = 'Register Overtime';
  document.querySelector('#modalExtra .modal-body p').textContent = 'Are you sure you want to register overtime?';
  document.querySelector('#modalExtra .botaoModal.cancelar').textContent = 'Cancel';
  document.querySelector('#modalExtra .botaoModal.confirmar').textContent = 'Yes, Register Overtime';
  
  document.querySelector('.rodape p').textContent = 'PausePro@ 2024 Time Tracking System - All rights reserved.';
  document.querySelectorAll('.links-rodape a')[0].textContent = 'Privacy Policy';
  document.querySelectorAll('.links-rodape a')[1].textContent = 'Terms of Use';
  document.querySelector('.conteudo-rodape p:nth-child(3)').textContent = 'Developed by Verdinhos';
  localStorage.setItem('language', 'en');

}
//TRADUTOR HOME
const botaoTradutorHome = document.getElementById('tradutordashboardHome');
let atualLinguagemHome = localStorage.getItem('language') || 'en';


if (atualLinguagemHome === 'pt') {
  translateToPortugueseHome();
} else {
  translateToEnglishHome();
}

function traduzirHome() {
  if (atualLinguagemHome === 'en') {
    atualLinguagemHome = 'pt'; 
    document.documentElement.lang = 'pt';
    translateToPortugueseHome();
  } else {
    atualLinguagemHome = 'en'; 
    document.documentElement.lang = 'en';
    translateToEnglishHome();
  }
  localStorage.setItem('language', atualLinguagemHome);
}

botaoTradutorHome.addEventListener('click', traduzirHome);