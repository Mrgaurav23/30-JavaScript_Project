const textareaElement = document.querySelector(".textarea");
const totalCounterElement = document.querySelector(".Total-counter");
const remainingCounterElement = document.querySelector(".remaining-counter");

textareaElement.addEventListener("keyup", () => {
    updateCounter();
})

function updateCounter(){
    totalCounterElement.innerText = textareaElement.value.length;
    remainingCounterElement.innerText = totalCounterElement.getAttribute("maxlength") - textareaElement.value.length;
}
