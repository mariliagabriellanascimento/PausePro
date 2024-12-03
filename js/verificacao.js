//TRADUCOES VERIFICACAO
function translateToPortugueseVerificacao() {
  document.querySelector('.titulo-facial-biometria').textContent = 'Verificação Facial e Biométrica';
  document.querySelector('.titulo-facial').textContent = 'Verificação Facial';
  document.querySelector('.comentarioFacial').textContent = 'Posicione-se em frente à câmera para fazer o ponto.';
  document.querySelector('#iniciarFacial').textContent = 'Iniciar Reconhecimento Facial';
  
  document.querySelector('.titulo-biometria').textContent = 'Verificação Biométrica (Impressão Digital)';
  document.querySelector('.comentarioBiometria').textContent = 'Coloque seu dedo no scanner biométrico para fazer o ponto.';
  document.querySelector('#iniciarBiometria').textContent = 'Iniciar Leitura Biométrica';
}

function translateToEnglishVerificacao() {
  document.querySelector('.titulo-facial-biometria').textContent = 'Facial and Biometric Verification';
  document.querySelector('.titulo-facial').textContent = 'Facial Verification';
  document.querySelector('.comentarioFacial').textContent = 'Position yourself in front of the camera to punch in.';
  document.querySelector('#iniciarFacial').textContent = 'Start Facial Recognition';
  
  document.querySelector('.titulo-biometria').textContent = 'Biometric Verification (Fingerprint)';
  document.querySelector('.comentarioBiometria').textContent = 'Place your finger on the biometric scanner to punch in.';
  document.querySelector('#iniciarBiometria').textContent = 'Start Biometric Scan';
}

//TRADUTOR VERIFICACAO

const botaoTradutorVerificacao = document.getElementById('tradutorVerificacao');
let atualLinguagemVerificacao = 'en';

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
