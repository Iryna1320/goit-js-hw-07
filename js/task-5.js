const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", outputChage);

function outputChage(event) {
  input.value === ""
    ? (output.textContent = "незнакомец")
    : (output.textContent = event.currentTarget.value);
}
