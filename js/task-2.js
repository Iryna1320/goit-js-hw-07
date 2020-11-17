const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsItem = document.querySelector('#ingredients');

const createList = ingredients.map(ingredient => {
  const createItem = document.createElement('li');
  createItem.textContent = ingredient;
  return createItem;
});

ingredientsItem.append(...createList);
