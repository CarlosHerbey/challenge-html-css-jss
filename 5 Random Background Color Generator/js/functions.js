const button = document.getElementById('generate-btn');
const colorCode = document.getElementById('color-code');
button.addEventListener('click', generateRandomColor);



function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    document.body.style.backgroundColor = rgbColor;
    
    colorCode.textContent = rgbColor;
}
