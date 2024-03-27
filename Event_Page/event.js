const eventDate = new Date(2024, 3, 1, 18, 0, 0);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days + "d";
    document.getElementById("hours").innerText = hours + "h";
    document.getElementById("minutes").innerText = minutes + "m";
    document.getElementById("seconds").innerText = seconds + "s";

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-text").innerText = "Event has started!";
        document.getElementById("countdown-timer").style.display = "none";
    }
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
