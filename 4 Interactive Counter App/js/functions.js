let counterValue = 0;
const counterElement = document.getElementById("counter");


function increaseCounter() {
    counterValue++;
    counterElement.textContent = counterValue;
    setColorCounter();
}

function decreaseCounter() {
    counterValue--;
    counterElement.textContent = counterValue;
    setColorCounter();
}

function resetCounter() {
    counterValue = 0;
    counterElement.textContent = counterValue;
    setColorCounter();
}

function setColorCounter() {
    if (counterValue > 0) counterElement.style.color = "green";
    else if (counterValue < 0) counterElement.style.color = "red";
    else counterElement.style.color = "white";
}