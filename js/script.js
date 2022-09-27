const hour = document.querySelector('[data-hour-hand]');
const minute = document.querySelector('[data-minute-hand]');
const second = document.querySelector('[data-second-hand]');

setInterval(setClock, 1000);

function setClock() {
    const currentDate = new Date();
    const secondsRasio = currentDate.getSeconds() / 60;
    const minutesRasio = (secondsRasio + currentDate.getMinutes()) / 60;
    const hoursRasio = (minutesRasio + currentDate.getHours()) / 12;
    setRotation(hour, hoursRasio)
    setRotation(minute, minutesRasio)
    setRotation(second, secondsRasio)
}

function setRotation(element, rotationRasio) {
    element.style.setProperty('--rotation', rotationRasio * 360)
}
