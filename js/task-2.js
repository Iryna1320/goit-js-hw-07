const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsItem = document.querySelector("#ingredients");

const createList = (ingredient) => {
  const createItem = document.createElement("li");
  createItem.textContent = ingredient;
  ingredientsItem.appendChild(createItem);
  return createItem;
};

ingredients.map((ingredient) => createList(ingredient));
console.log(ingredientsItem);
