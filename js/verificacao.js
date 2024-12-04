//TRADUCOES VERIFICACAO
function translateToPortugueseVerificacao() {
  document.querySelector('.titulo-facial').textContent = 'Verificação Facial';
  document.querySelector('.comentarioFacial').textContent = 'Posicione-se em frente à câmera para fazer o ponto.';
  document.querySelector('#iniciarFacial').textContent = 'Iniciar Reconhecimento Facial';
  localStorage.setItem('language', 'pt');
  
}

function translateToEnglishVerificacao() {
  document.querySelector('.titulo-facial').textContent = 'Facial Verification';
  document.querySelector('.comentarioFacial').textContent = 'Position yourself in front of the camera to punch in.';
  document.querySelector('#iniciarFacial').textContent = 'Start Facial Recognition';
  localStorage.setItem('language', 'en');
  
}

//TRADUTOR VERIFICACAO
const botaoTradutorVerificacao = document.getElementById('tradutorVerificacao');
let atualLinguagemVerificacao = localStorage.getItem('language') || 'en';

if (atualLinguagemVerificacao === 'pt') {
  translateToPortugueseVerificacao();
} else {
  translateToEnglishVerificacao();
}

function traduzirVerificacao() {
  if (atualLinguagemVerificacao === 'en') {
      atualLinguagemVerificacao = 'pt';
      document.documentElement.lang = 'pt';
      translateToPortugueseVerificacao();
  } else {
      atualLinguagemVerificacao = 'en';
      document.documentElement.lang = 'en';
      translateToEnglishVerificacao();
  }
};

botaoTradutorVerificacao.addEventListener('click', traduzirVerificacao);
