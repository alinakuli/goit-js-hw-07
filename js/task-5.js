function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorForm = document.querySelector(".widget");
const colorBtn = colorForm.querySelector(".change-color")

function changeBackgroundColor(event) {
  const newColor = getRandomHexColor();
  const colorSpan = colorForm.querySelector(".color");
  colorSpan.textContent = newColor;
  body.style.backgroundColor = newColor;
}

colorBtn.addEventListener("click", changeBackgroundColor)


