let containerElement = document.querySelector(".container");
let fontElement = document.querySelector("h1")

fontElement.style.fontSize = "100px";

let carrer = ["Student" , "Web Developer" , "Java Programming"];

let carrerIndex = 0;
let characterIndex = 0;

function updateText(){
    characterIndex++;
    containerElement.innerHTML = `I am A ${carrer[carrerIndex].slice(0,characterIndex)}`;

    if(characterIndex == carrer[carrerIndex].length){
        carrerIndex++;
        characterIndex = 0;
    }

    if(carrerIndex == carrer.length){
        carrerIndex = 0;
    }

    setTimeout(updateText,400)
}

updateText();