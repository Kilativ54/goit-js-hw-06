const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
const counterValue = document.querySelector("#value");
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
buttonDecrement.addEventListener("click", minusClick);

function minusClick(evt) {
  counter.decrement();
  counterValue.textContent = counter.value;
}

buttonIncrement.addEventListener("click", plusClick);
function plusClick() {
  counter.increment();
  counterValue.textContent = counter.value;
}
