//NOTIFICACAO
const notificacao = document.querySelector('.notificacoes');

function irNotificacao() {
    window.location.href = "alertas.html";  
}

notificacao.addEventListener("click", irNotificacao);

function mostrarNotificacao(acao) {
    const notificacoesDiv = document.getElementById("notificacoes"); 
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    // Formata a hora
    const horaFormatada = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

    let mensagem;
    switch (acao) {
        case 'ponto':
            mensagem = `You punched in at ${horaFormatada}.`;
            break;
        case 'pausa':
            mensagem = `You took a break at ${horaFormatada}.`;
            break;
        case 'retoma':
            mensagem = `You resumed at ${horaFormatada}.`;
            break;
        case 'finaliza':
            mensagem = `You finished at ${horaFormatada}.`;
            break;
        case 'extra':
            mensagem = `You punched overtime at ${horaFormatada}.`;
            break;
        default:
            mensagem = `Action performed at ${horaFormatada}.`;
    }

    let classeCor = '';
    switch (acao) {
        case 'ponto':
            classeCor = 'ponto-alerta';
            break;
        case 'pausa':
            classeCor = 'pausa-alerta';
            break;
        case 'retoma':
            classeCor = 'retoma-alerta';
            break;
        case 'finaliza':
            classeCor = 'finaliza-alerta';
            break;
        case 'extra':
            classeCor = 'extra-alerta';
            break;
    }

    const notificacao = {
        mensagem: mensagem,
        classeCor: classeCor
    };

    const notificacoes = JSON.parse(localStorage.getItem('notificacoes')) || [];

    notificacoes.push(notificacao);

    localStorage.setItem('notificacoes', JSON.stringify(notificacoes));

    notificacoesDiv.innerHTML = `<p class="${classeCor}">${mensagem}</p>`;

    atualizarContador();
}

function atualizarContador() {
    const contadorNotificacao = document.getElementById("contador-notificacao");

    const notificacoes = JSON.parse(localStorage.getItem('notificacoes')) || [];

    contadorNotificacao.textContent = notificacoes.length;
}


document.getElementById("botaoIniciar")?.addEventListener("click", function() {
    mostrarNotificacao('ponto');
});
document.getElementById("botaoPausa")?.addEventListener("click", function() {
    mostrarNotificacao('pausa');
});
document.getElementById("botaoRetomar")?.addEventListener("click", function() {
    mostrarNotificacao('retoma');
});
document.getElementById("botaoFinalizar")?.addEventListener("click", function() {
    mostrarNotificacao('finaliza');
});
document.getElementById("botaoExtra")?.addEventListener("click", function() {
    mostrarNotificacao('extra');
});

window.onload = function() {
    const notificacoesDiv = document.querySelector(".secao-alertas");
    const contadorNotificacao = document.getElementById("contador-notificacao");

    const notificacoes = JSON.parse(localStorage.getItem('notificacoes')) || [];

    if (notificacoes.length > 0) {
        notificacoes.forEach(function(notificacao) {
            const div = document.createElement("div");
            div.classList.add("alerta", notificacao.classeCor); 

            div.textContent = notificacao.mensagem; 
            notificacoesDiv.appendChild(div); 
        });

        contadorNotificacao.textContent = notificacoes.length;
    } else {
        const div = document.createElement("div");
        div.classList.add("alerta");
        div.textContent = "No notifications yet.";
        notificacoesDiv.appendChild(div);

        contadorNotificacao.textContent = '0';
    }
};



  