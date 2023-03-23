
const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoryTitle = item.firstElementChild.textContent;
  const categoryElements = item.lastElementChild.children.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
