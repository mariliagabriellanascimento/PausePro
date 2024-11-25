//RELOGIO
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

//RELATORIOS

document.querySelectorAll('.secao-relatorio h2').forEach(function(header) {
    header.addEventListener('click', function() {
        const table = header.nextElementSibling;

        if (table.style.display === 'none' || table.style.display === '') {
            table.style.display = 'block';
        } else {
            table.style.display = 'none';
        }

        const arrow = header.querySelector('span');
        if (table.style.display === 'block') {
            arrow.innerHTML = '&#9652';
        } else {
            arrow.innerHTML = '&#9662';
        }
    });
});
