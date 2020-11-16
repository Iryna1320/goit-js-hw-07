const counterValue = document.querySelector("#value");
const addListenerIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const removeListenerDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

addListenerIncrement.addEventListener("click", () => {
  counterValue.textContent = +counterValue.textContent + 1;
});

removeListenerDecrement.addEventListener("click", () => {
  counterValue.textContent -= 1;
});
