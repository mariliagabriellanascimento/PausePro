//FACIAL
function iniciarReconhecimentoFacial() {
  const video = document.getElementById("videoFeed");
  const statusFacial = document.getElementById("statusFacial");

  navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {

          video.srcObject = stream;

          statusFacial.textContent = "Facial recognition started...";

          setTimeout(() => {
              stopCamera(stream);
              window.location.href = "home.html";
          }, 3000);
      })
      .catch((error) => {
          statusFacial.textContent = "Camera not detected. Simulating facial recognition...";

          setTimeout(() => {
              window.location.href = "home.html";
          }, 3000);
      });
}

function stopCamera(stream) {
  const tracks = stream.getTracks();
  tracks.forEach(track => track.stop());
}

document.getElementById("iniciarFacial").addEventListener("click", iniciarReconhecimentoFacial);