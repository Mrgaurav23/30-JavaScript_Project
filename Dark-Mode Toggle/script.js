const inputElement = document.querySelector(".input");

const mainElement = document.querySelector(".main");

inputElement.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputElement.checked) {
    mainElement.style.background = "black";
  } else {
    mainElement.style.background = "white";
  }
}

inputElement.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputElement.checked));
}