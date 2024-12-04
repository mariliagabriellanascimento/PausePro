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

//TRADUCAO RELATORIOS
function translateToPortugueseRelatorios() {

    document.querySelector('h1.titulo-relatorios').textContent = 'Relatórios';
    document.querySelector('div#ponto-status').textContent = 'Último ponto: 08:00 AM';

    const navLinks = document.querySelectorAll('.links-nav');
    navLinks[0].textContent = 'INÍCIO';
    navLinks[1].textContent = 'HISTÓRICO DE PONTOS';
    navLinks[2].textContent = 'RELATÓRIOS';
        
    const secaoHorasTrabalhadas = document.querySelectorAll('.secao-relatorio h2')[0];
    secaoHorasTrabalhadas.innerHTML = 'Resumo das Horas Trabalhadas <span>&#9662;</span>';
    const tabelaHorasTrabalhadas = document.querySelectorAll('.tabela-horas-trabalhadas thead th');
    tabelaHorasTrabalhadas[0].textContent = 'Data';
    tabelaHorasTrabalhadas[1].textContent = 'Horas Trabalhadas';
    tabelaHorasTrabalhadas[2].textContent = 'Horas Extras';
    
    const secaoPausas = document.querySelectorAll('.secao-relatorio h2')[1];
    secaoPausas.innerHTML = 'Pausas e Intervalos <span>&#9662;</span>';
    const tabelaPausas = document.querySelectorAll('.tabela-pausas thead th');
    tabelaPausas[0].textContent = 'Data';
    tabelaPausas[1].textContent = 'Hora de Início';
    tabelaPausas[2].textContent = 'Hora de Término';
    tabelaPausas[3].textContent = 'Duração';
    
    const secaoFaltas = document.querySelectorAll('.secao-relatorio h2')[2];
    secaoFaltas.innerHTML = 'Faltas e Atrasos <span>&#9662;</span>';
    const tabelaFaltas = document.querySelectorAll('.tabela-faltas thead th');
    tabelaFaltas[0].textContent = 'Data';
    tabelaFaltas[1].textContent = 'Ausência';
    tabelaFaltas[2].textContent = 'Atrasos';
    

    const secaoGrafico = document.querySelectorAll('.secao-relatorio h2')[3];
    secaoGrafico.innerHTML = 'Gráfico de Horas Trabalhadas <span>&#9662;</span>';
    
    document.querySelector('.rodape p').textContent = 'PausePro@ 2024 Sistema de Controle de Ponto - Todos os direitos reservados.';
    document.querySelectorAll('.links-rodape a')[0].textContent = 'Política de Privacidade';
    document.querySelectorAll('.links-rodape a')[1].textContent = 'Termos de Uso';
    document.querySelector('.conteudo-rodape p:nth-child(3)').textContent = 'Desenvolvido por Verdinhos';
    localStorage.setItem('language', 'pt');

  }
  
  function translateToEnglishRelatorios() {

    document.querySelector('h1.titulo-relatorios').textContent = 'Reports';
    document.querySelector('div#ponto-status').textContent = 'Last punch: 08:00 AM';

    const navLinks = document.querySelectorAll('.links-nav');
    navLinks[0].textContent = 'HOME';
    navLinks[1].textContent = 'ATTENDANCE HISTORY';
    navLinks[2].textContent = 'REPORTS';
    
    // Seção de Resumo de Horas Trabalhadas
    const secaoHorasTrabalhadas = document.querySelectorAll('.secao-relatorio h2')[0];
    secaoHorasTrabalhadas.innerHTML = 'Summary of Worked Hours <span>&#9662;</span>';
    const tabelaHorasTrabalhadas = document.querySelectorAll('.tabela-horas-trabalhadas thead th');
    tabelaHorasTrabalhadas[0].textContent = 'Date';
    tabelaHorasTrabalhadas[1].textContent = 'Worked Hours';
    tabelaHorasTrabalhadas[2].textContent = 'Overtime Hours';
    
    const secaoPausas = document.querySelectorAll('.secao-relatorio h2')[1];
    secaoPausas.innerHTML = 'Breaks and Intervals <span>&#9662;</span>';
    const tabelaPausas = document.querySelectorAll('.tabela-pausas thead th');
    tabelaPausas[0].textContent = 'Date';
    tabelaPausas[1].textContent = 'Start Time';
    tabelaPausas[2].textContent = 'End Time';
    tabelaPausas[3].textContent = 'Duration';
    
    const secaoFaltas = document.querySelectorAll('.secao-relatorio h2')[2];
    secaoFaltas.innerHTML = 'Absences and Delays <span>&#9662;</span>';
    const tabelaFaltas = document.querySelectorAll('.tabela-faltas thead th');
    tabelaFaltas[0].textContent = 'Date';
    tabelaFaltas[1].textContent = 'Absence';
    tabelaFaltas[2].textContent = 'Delays';
    
    const secaoGrafico = document.querySelectorAll('.secao-relatorio h2')[3];
    secaoGrafico.innerHTML = 'Worked Hours Chart <span>&#9662;</span>';

    document.querySelector('.rodape p').textContent = 'PausePro@ 2024 Time Tracking System - All rights reserved.';
    document.querySelectorAll('.links-rodape a')[0].textContent = 'Privacy Policy';
    document.querySelectorAll('.links-rodape a')[1].textContent = 'Terms of Use';
    document.querySelector('.conteudo-rodape p:nth-child(3)').textContent = 'Developed by Verdinhos';
    localStorage.setItem('language', 'en');

  }
  
//TRADUTOR RELATORIOS
const botaoTradutorRelatorios = document.getElementById('tradutordashboardRelatorios');
let atualLinguagemRelatorios = localStorage.getItem('language') || 'en';

if (atualLinguagemRelatorios === 'pt') {
  translateToPortugueseRelatorios();
} else {
  translateToEnglishRelatorios();
}

function traduzirRelatorios() {
  if (atualLinguagemRelatorios === 'en') {
      atualLinguagemRelatorios = 'pt';
      document.documentElement.lang = 'pt';
      translateToPortugueseRelatorios();
  } else {
      atualLinguagemRelatorios = 'en';
      document.documentElement.lang = 'en';
      translateToEnglishRelatorios();
  }
};

botaoTradutorRelatorios.addEventListener('click', traduzirRelatorios);