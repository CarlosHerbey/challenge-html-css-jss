const clock = document.getElementById("clock");
const clockDiv = document.querySelector(".clock");
const h1Elements = document.querySelectorAll(".h1div");

let previousBodyColor = "white";
let previousCardColor = "black";

updateClock();
setInterval(updateClock, 1000);

function updateClock() {
    const time = new Date();

    clock.textContent = time.toLocaleTimeString("en-US", {
        timeZone: "America/Mexico_City",
        hour12: false
    });

    const newColor = generateRandomColor();

    h1Elements.forEach(element => {
        element.style.color = previousCardColor;
    });

    clockDiv.style.backgroundColor = previousBodyColor;

    document.body.style.backgroundColor = newColor;

    previousCardColor = previousBodyColor;
    previousBodyColor = newColor;
}

function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}