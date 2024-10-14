let imageContainerEl = document.querySelector(".image-container");
let btnElement = document.querySelector(".btn");

btnElement.addEventListener("click", () => {
    imageNum = 8;
    addNewImage();
})

function addNewImage(){
    for (let index = 0; index < imageNum; index++) {
        let newImgElement = document.createElement("img");
        newImgElement.src = `https://picsum.photos/200/300?random=${Math.round(Math.random()*2000)}`;
        imageContainerEl.appendChild(newImgElement)
    }
}