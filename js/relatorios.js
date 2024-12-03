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