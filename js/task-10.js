function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputAmount = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const allBoxes = [];
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    allBoxes.push(div);
  }
  return allBoxes;
};
const destroyBoxes = () => {
  box.innerHTML = "";
};
btnCreate.addEventListener("click", addBx);
function addBx(event) {
  let numberBoxAdd = createBoxes(inputAmount.value);
  box.append(...numberBoxAdd);
}
btnDestroy.addEventListener("click", destr);
function destr() {
  destroyBoxes();
}
