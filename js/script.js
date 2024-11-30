//LOGIN
document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", function () {
        const employeeId = document.getElementById("employeeId").value;
        const password = document.getElementById("password").value;

        if (employeeId.trim() && password.trim()) {
            window.location.href = "./pags/logado.html";
        } else {

            alert("Please fill in all the fields.");
        }
    });
});

//FACIAL
document.getElementById("iniciar-facial").addEventListener("click", function() {
    const video = document.getElementById("video-feed");
    const faceStatus = document.getElementById("status-facial");

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
            faceStatus.innerHTML = "Waiting for facial recognition...";

            setTimeout(function() {
                faceStatus.innerHTML = "Clock in successful!";
            }, 5000);
        })
        .catch(function(error) {
            faceStatus.innerHTML = "Error accessing the camera. Please try again.";
            console.log(error);
        });
});

//BIOMETRIA
document.getElementById("iniciar-biometria").addEventListener("click", function() {
    const biometricStatus = document.getElementById("status-biometria");
    biometricStatus.innerHTML = "Waiting for biometric scan...";

    setTimeout(function() {
        biometricStatus.innerHTML = "Clock in successful!";
    }, 3000); 
});
   


//PAGINAS
document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;

    const navLinks = document.querySelectorAll('.nav-menu .links-nav');

    navLinks.forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});


//RELOGIO
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

//CARROSSEL LOGIN
let indiceLogin = 0;
const carrosselItemsLogin = document.querySelectorAll('.carrossel-interno-login .item-carrossel-login');

function moverCarrosselLogin(directionLogin) {
    indiceLogin += directionLogin;

    if (indiceLogin < 0) {
        indiceLogin = carrosselItemsLogin.length - 1; 
    } else if (indiceLogin >= carrosselItemsLogin.length) {
        indiceLogin = 0; 
    }

    // Move o carrossel para a posição correta
    const offset = -indiceLogin * 100; 
    document.querySelector('.carrossel-interno-login').style.transform = `translateX(${offset}%)`;
}

//CARROSSEL HOME
let indiceHome = 0;
const carrosselItemsHome = document.querySelectorAll('.carrossel-interno-home .item-carrossel-home');

function moverCarrosselHome(directionHome) {
    indiceHome += directionHome;

    if (indiceHome < 0) {
        indiceHome = carrosselItemsHome.length - 1; 
    } else if (indiceHome >= carrosselItemsHome.length) {
        indiceHome = 0; 
    }

    const offset = -indiceHome * 100; 
    document.querySelector('.carrossel-interno-home').style.transform = `translateX(${offset}%)`;
}


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
