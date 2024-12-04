// MODAIS + CONTADOR 
//CONTADOR
function atualizarContador() {
    const contador = document.getElementById("contador-notificacao");
    let valorAtual = parseInt(contador.textContent);
    if (isNaN(valorAtual)) valorAtual = 0;
    contador.textContent = valorAtual + 1;
}

// MODAL INICIAR
function abrirModalInicio() {
    document.getElementById("modalIniciar").style.display = "block";
}

function fecharModalInicio() {
    document.getElementById("modalIniciar").style.display = "none";
}

function confirmarIniciar() {
    window.location.href = "verificacao.html";
}

document.getElementById("botaoIniciar")?.addEventListener("click", abrirModalInicio);
document.getElementById("cancelarIniciar")?.addEventListener("click", fecharModalInicio);
document.querySelector(".closeIniciar")?.addEventListener("click", fecharModalInicio);
document.getElementById("confirmarIniciar")?.addEventListener("click", confirmarIniciar);

// MODAL PAUSAR
function abrirModalPausar() {
    document.getElementById("modalPausar").style.display = "block";
}

function fecharModalPausar() {
    document.getElementById("modalPausar").style.display = "none";
}

function confirmarPausar() {
    atualizarContador();
    pausaAtiva = true;
    
    document.getElementById("botaoPausar").disabled = true;
    document.getElementById("botaoRetomar").disabled = false;

    fecharModalPausar();
}

document.getElementById("botaoPausar")?.addEventListener("click", abrirModalPausar);
document.getElementById("cancelarPausar")?.addEventListener("click", fecharModalPausar);
document.querySelector(".closePausar")?.addEventListener("click", fecharModalPausar);
document.getElementById("confirmarPausar")?.addEventListener("click", confirmarPausar);

// MODAL RETOMAR
function abrirModalRetomar() {
    document.getElementById("modalRetomar").style.display = "block";
}

function fecharModalRetomar() {
    document.getElementById("modalRetomar").style.display = "none";
}

function confirmarRetomar() {
    atualizarContador();
    pausaAtiva = false;
    
    document.getElementById("botaoPausar").disabled = false;
    document.getElementById("botaoRetomar").disabled = true;

    fecharModalRetomar();
}

document.getElementById("botaoRetomar")?.addEventListener("click", abrirModalRetomar);
document.getElementById("cancelarRetomar")?.addEventListener("click", fecharModalRetomar);
document.querySelector(".closeRetomar")?.addEventListener("click", fecharModalRetomar);
document.getElementById("confirmarRetomar")?.addEventListener("click", confirmarRetomar);

// MODAL FINALIZAR
function abrirModalFinalizar() {
    document.getElementById("modalFinalizar").style.display = "block";
}

function fecharModalFinalizar() {
    document.getElementById("modalFinalizar").style.display = "none";
}

function confirmarFinalizar() {
    window.location.href = "verificacao.html";
}

document.getElementById("botaoFinalizar")?.addEventListener("click", abrirModalFinalizar);
document.getElementById("cancelarFinalizar")?.addEventListener("click", fecharModalFinalizar);
document.querySelector(".closeFinalizar")?.addEventListener("click", fecharModalFinalizar);
document.getElementById("confirmarFinalizar")?.addEventListener("click", confirmarFinalizar);

// MODAL EXTRA
function abrirModalExtra() {
    document.getElementById("modalExtra").style.display = "block";
}

function fecharModalExtra() {
    document.getElementById("modalExtra").style.display = "none";
}

function confirmarExtra() {
    atualizarContador();
    // Implementar ação de confirmar se necessário
}

document.getElementById("botaoExtra")?.addEventListener("click", abrirModalExtra);
document.getElementById("cancelarExtra")?.addEventListener("click", fecharModalExtra);
document.querySelector(".closeExtra")?.addEventListener("click", fecharModalExtra);
document.getElementById("confirmarExtra")?.addEventListener("click", confirmarExtra);
