const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    

    const mins = now.getMinutes();
    const minutesDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

}

setInterval(setDate, 1000);