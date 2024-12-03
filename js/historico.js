//TRADUCAO HISTORICO
function translateToPortugueseHistorico() {
  document.querySelector('.titulo-historico').textContent = 'Histórico de Ponto Semanal';
  document.querySelector('#ponto-status').textContent = 'Último ponto: 08:00 AM';

  const navLinks = document.querySelectorAll('.links-nav');
  navLinks[0].textContent = 'INÍCIO';
  navLinks[1].textContent = 'HISTÓRICO DE PONTOS';
  navLinks[2].textContent = 'RELATÓRIOS';

  const tableHeaders = document.querySelectorAll('.tabela-historico-semanal th');
  tableHeaders[0].textContent = 'Data';
  tableHeaders[1].textContent = 'Hora de Entrada';
  tableHeaders[2].textContent = 'Hora de Saída';
  tableHeaders[3].textContent = 'Horas Trabalhadas';
  tableHeaders[4].textContent = 'Horas Extras';
  tableHeaders[5].textContent = 'Intervalos';
  tableHeaders[6].textContent = 'Status';

  document.querySelector('.rodape p').textContent = 'PausePro@ 2024 Sistema de Controle de Ponto - Todos os direitos reservados.';
  document.querySelectorAll('.links-rodape a')[0].textContent = 'Política de Privacidade';
  document.querySelectorAll('.links-rodape a')[1].textContent = 'Termos de Uso';
  document.querySelector('.conteudo-rodape p:nth-child(3)').textContent = 'Desenvolvido por Verdinhos';

}

function translateToEnglishHistorico() {
  document.querySelector('.titulo-historico').textContent = 'Weekly Attendance History';
  document.querySelector('#ponto-status').textContent = 'Last punch: 08:00 AM';

  const navLinks = document.querySelectorAll('.links-nav');
  navLinks[0].textContent = 'HOME';
  navLinks[1].textContent = 'ATTENDANCE HISTORY';
  navLinks[2].textContent = 'REPORTS';

  const tableHeaders = document.querySelectorAll('.tabela-historico-semanal th');
  tableHeaders[0].textContent = 'Date';
  tableHeaders[1].textContent = 'Entry Time';
  tableHeaders[2].textContent = 'Exit Time';
  tableHeaders[3].textContent = 'Worked Hours';
  tableHeaders[4].textContent = 'Overtime Hours';
  tableHeaders[5].textContent = 'Breaks';
  tableHeaders[6].textContent = 'Status';

  document.querySelector('.rodape p').textContent = 'PausePro@ 2024 Time Tracking System - All rights reserved.';
  document.querySelectorAll('.links-rodape a')[0].textContent = 'Privacy Policy';
  document.querySelectorAll('.links-rodape a')[1].textContent = 'Terms of Use';
  document.querySelector('.conteudo-rodape p:nth-child(3)').textContent = 'Developed by Verdinhos';
}

//TRADUTOR HISTORICO
const translationButton = document.getElementById('tradutordashboardHistorico');
let currentLanguageHistorico = 'en';

function traduzirHistorico() {
  if (currentLanguageHistorico === 'en') {
      currentLanguageHistorico = 'pt';
      document.documentElement.lang = 'pt';
      translateToPortugueseHistorico();
  } else {
      currentLanguageHistorico = 'en';
      document.documentElement.lang = 'en';
      translateToEnglishHistorico();
  }
}

translationButton.addEventListener('click', traduzirHistorico);
