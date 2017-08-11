var secondHand = document.getElementsByClassName('second-hand');
var minutesHand = document.getElementsByClassName('min-hand');
var hourHand = document.getElementsByClassName('hour-hand');

function setDate() {

    const actualTime = new Date();

    const seconds =  actualTime.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = actualTime.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = actualTime.getHours();
    const hoursDegrees = ((hours / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();