

function iniciarReconhecimentoFacial() {
    const video = document.getElementById("videoFeed");
    const statusFacial = document.getElementById("statusFacial");
  
    if (!video || !statusFacial) {
        console.error('Video or statusFacial elements not found.');
        return;
    }
  
    statusFacial.textContent = "Waiting for facial recognition...";
  
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
        console.error('Error accessing the camera:', error);
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
  

  document.getElementById("iniciarFacial")?.addEventListener("click", iniciarReconhecimentoFacial);
  