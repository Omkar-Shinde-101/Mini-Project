const btn = document.querySelector(".btn");
const input = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");

btn.addEventListener("click", () => {
  createPassword();
});

copyIcon.addEventListener("click", () => {
  copyPassword();
  if (input.value) {
    alertContainer.classList.remove("active");
    setTimeout(() => {
      alertContainer.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const chars = `abcdefghijklmnopqrstuvwxyz!@#$%^&*()-=_+[]""{};:<>,.?/ABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890`;
  const passLength = 14;
  let password = "";
  for (let i = 0; i < passLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  input.value = password;
  alertContainer.innerText = password + "  copied!";
}

function copyPassword() {
  input.select();
  input.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(input.value);
}
