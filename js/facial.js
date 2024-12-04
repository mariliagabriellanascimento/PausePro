//FACIAL
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
  
//INTEGRANDO FACIAL AO BACK-END
// function registrarPonto(horaDeEntrada) {
//   const usuarioId = "123";

//   fetch('/registrar_ponto', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//           horaDeEntrada: horaDeEntrada,
//           usuarioId: usuarioId,
//       })
//   })
//   .then(response => response.json())
//   .then(data => {
//       if (data.status === 'success') {
//           if (typeof atualizarContador === "function") {
//               atualizarContador(); 
//           }

//           window.location.href = "home.html";
//       } else {
//           alert('Error registering time!');
//       }
//   })
//   .catch(error => {
//       console.error('Error sending data:', error); 
//       alert('Error registering time!');
//   });
// }

// function iniciarReconhecimentoFacial() {
//   const video = document.getElementById("videoFeed");
//   const statusFacial = document.getElementById("statusFacial");

//   if (!video || !statusFacial) {
//       console.error('Video or statusFacial elements not found.');
//       return;
//   }

//   statusFacial.textContent = "Waiting for facial recognition...";

//   navigator.mediaDevices.getUserMedia({ video: true })
//     .then((stream) => {
//       video.srcObject = stream;

//       statusFacial.textContent = "Facial recognition started...";

//       setTimeout(() => {
//         stopCamera(stream);

//         const horaDeEntrada = new Date().toISOString();
        
//         registrarPonto(horaDeEntrada);
//       }, 3000);
//     })
//     .catch((error) => {
//       console.error('Error accessing the camera:', error);
//       statusFacial.textContent = "Camera not detected. Simulating facial recognition...";

//       setTimeout(() => {
//         const horaDeEntrada = new Date().toISOString();
//         registrarPonto(horaDeEntrada); 
//       }, 3000);
//     });
// }

// function stopCamera(stream) {
//   const tracks = stream.getTracks();
//   tracks.forEach(track => track.stop());
// }

// document.getElementById("iniciarFacial")?.addEventListener("click", iniciarReconhecimentoFacial);