function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const nameColor = document.querySelector('color')
buttonColor.addEventListener('click', color);
function color(event){
  let backColor = getRandomHexColor();
body.style.backgroundColor = backColor;
nameColor.textContent = backColor;
}