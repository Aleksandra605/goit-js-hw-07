const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');

const makeList = options => {
  return ingredients.map((ingredient) => {
    const string = document.createElement('li');
    string.textContent = ingredient;
     
    return string;
  })
}

const createList = makeList(ingredients);
list.append(...createList);

console.log(list);
