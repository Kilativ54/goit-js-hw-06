const formSubmit = document.querySelector(".login-form");

formSubmit.addEventListener("submit", sendForm);

function sendForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Заповніть будь ласка всі поля!");
  }
  const userProfil = { email: email.value, password: password.value };
  console.log(userProfil);
  event.currentTarget.reset();
}
