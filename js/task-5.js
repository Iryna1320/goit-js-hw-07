const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', outputChage);

function outputChage(event) {
  output.textContent =
    input.value === '' ? 'незнакомец' : event.currentTarget.value;
}
