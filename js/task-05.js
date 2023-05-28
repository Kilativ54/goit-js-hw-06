const inputName = document.querySelector("#name-input");
let outputName = document.querySelector("#name-output");
inputName.addEventListener("input", arr);
function arr(event) {
  outputName.textContent = event.target.value;
  if (outputName.textContent === "") {
    outputName.textContent = "Anonymous";
  }
}
