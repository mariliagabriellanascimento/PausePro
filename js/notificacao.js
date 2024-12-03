//TRADUCAO NOTIFICACAO
function translateToPortugueseAlertas() {
  document.querySelector('.titulo-alertas').textContent = 'Notificações';
  document.querySelector('div#ponto-status').textContent = 'Último ponto: 08:00 AM';

  const navLinks = document.querySelectorAll('.links-nav');
  navLinks[0].textContent = 'INÍCIO';
  navLinks[1].textContent = 'HISTÓRICO DE PONTOS';
  navLinks[2].textContent = 'RELATÓRIOS';

  document.querySelector('.rodape p').textContent = 'PausePro@ 2024 Sistema de Controle de Ponto - Todos os direitos reservados.';
  document.querySelectorAll('.links-rodape a')[0].textContent = 'Política de Privacidade';
  document.querySelectorAll('.links-rodape a')[1].textContent = 'Termos de Uso';
  document.querySelector('.conteudo-rodape p:nth-child(3)').textContent = 'Desenvolvido por Verdinhos';

}

function translateToEnglishAlertas() {
  document.querySelector('.titulo-alertas').textContent = 'Alerts';
  document.querySelector('div#ponto-status').textContent = 'Last punch: 08:00 AM';

  const navLinks = document.querySelectorAll('.links-nav');
  navLinks[0].textContent = 'HOME';
  navLinks[1].textContent = 'ATTENDANCE HISTORY';
  navLinks[2].textContent = 'REPORTS';

  document.querySelector('.rodape p').textContent = 'PausePro@ 2024 Time Tracking System - All rights reserved.';
  document.querySelectorAll('.links-rodape a')[0].textContent = 'Privacy Policy';
  document.querySelectorAll('.links-rodape a')[1].textContent = 'Terms of Use';
  document.querySelector('.conteudo-rodape p:nth-child(3)').textContent = 'Developed by Verdinhos';
}

//TRADUTOR NOTIFICACAO
const translationButton = document.getElementById('tradutordashboardAlertas');
let currentLanguageAlertas = 'en';

function traduzirAlertas() {
  if (currentLanguageAlertas === 'en') {
      currentLanguageAlertas = 'pt';
      document.documentElement.lang = 'pt';
      translateToPortugueseAlertas();
  } else {
      currentLanguageAlertas = 'en';
      document.documentElement.lang = 'en';
      translateToEnglishAlertas();
  }
}

translationButton.addEventListener('click', traduzirAlertas);