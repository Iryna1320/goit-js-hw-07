const categoriesRef = document.querySelectorAll('.item');
categoriesRef.forEach(function (elem) {
  console.log(`Категория: ${elem.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${elem.lastElementChild.children.length}`);
});
