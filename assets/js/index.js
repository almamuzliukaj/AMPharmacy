function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let isOpen = (hours >= 8 && hours < 20); // 08:00 to 19:59
    let status = isOpen ? "Open 🟢" : "Closed 🔴";

    clockElement.textContent = `${hours}:${minutes}:${seconds} - ${status}`;
}

setInterval(updateClock, 1000);
updateClock();
