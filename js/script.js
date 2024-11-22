let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

document.body.style.fontFamily = "'Montserrat', sans-serif";

document.addEventListener('DOMContentLoaded', () => {
    let isClockedIn = false;
    let hoursWorked = 0;
    let timer;
    let notifications = 0;

    const pauseBtn = document.getElementById('pauseBtn');
    const resumeBtn = document.getElementById('resumeBtn');
    const finishBtn = document.getElementById('finishBtn');
    const extraBtn = document.getElementById('extraBtn');
    const hoursWorkedEl = document.getElementById('hoursWorked');
    const clockStatus = document.getElementById('clock-status');
    const clockEl = document.getElementById('clock');
    const notificationCountEl = document.getElementById('notification-count'); 

    function updateNotifications() {
        notificationCountEl.textContent = notifications;
    }

    function clockIn() {
        isClockedIn = true;
        clockStatus.textContent = "Last clock-in: 08:00 AM";
        updateButtonsState();
        notifications++;       
        updateNotifications();
    }

    function pauseClock() {
        timer = setInterval(() => {
            hoursWorked += 0.5; 
            hoursWorkedEl.textContent = `${Math.floor(hoursWorked)}h ${Math.floor((hoursWorked % 1) * 60)}m`;

            if (hoursWorked >= 8) {
                extraBtn.style.display = "block";
                clearInterval(timer);
            }
        }, 1800000);  
        notifications++;  
        updateNotifications();
    }

    function resumeClock() {
        pauseClock();  
        notifications++;  
        updateNotifications();
    }

    function finishClock() {
        clearInterval(timer); 
        notifications++; 
        updateNotifications();
        alert("Clock-out successful!");
    }

    function updateButtonsState() {
        if (isClockedIn) {
            pauseBtn.disabled = false; 
            resumeBtn.disabled = true;  
            finishBtn.disabled = true;  
            extraBtn.style.display = "none";  
        }
        if (hoursWorked >= 8) {
            finishBtn.disabled = false; 
        }
    }

    pauseBtn.addEventListener('click', () => {
        if (isClockedIn && !pauseBtn.disabled) {
            pauseClock();  
            pauseBtn.disabled = true;  
            resumeBtn.disabled = false;  
        }
    });

    resumeBtn.addEventListener('click', () => {
        if (pauseBtn.disabled) {  
            resumeClock(); 
            resumeBtn.disabled = true; 
            pauseBtn.disabled = false; 
        }
    });

    finishBtn.addEventListener('click', () => {
        if (hoursWorked >= 8) {
            finishClock(); 
        }
    });

    extraBtn.addEventListener('click', () => {
        alert("You chose to do overtime!");
    });

    clockIn();
});
