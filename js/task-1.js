const categoriesRef = document.querySelectorAll('.item');
const allCategories = document.querySelector('#categories');

console.log(`В списке ${allCategories.children.length} категории`);
categoriesRef.forEach(function (elem) {
  console.log(`Категория: ${elem.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${elem.lastElementChild.children.length}`);
});
