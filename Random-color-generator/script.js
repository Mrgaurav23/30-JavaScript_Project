const containerElement = document.querySelector(".container");

for (let index = 1; index < 30; index++) {
    const colorContainerElement = document.createElement("div");
    colorContainerElement.classList.add("color-container");
    containerElement.appendChild(colorContainerElement);
}

const colorElements = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorElements.forEach( (colorContainerEl) => {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    })
}

function randomColor(){
    const char = "0123456789abcdef";
    const charLength = 6;
    let colorCode = "";

    for(let i=0; i<charLength; i++){
        const randomNumber = (Math.round(Math.random() * char.length));
        colorCode += char.substring(randomNumber , randomNumber+1);
    }
    return colorCode;
}