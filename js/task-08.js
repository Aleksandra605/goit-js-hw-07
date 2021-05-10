// Write a script to create and clean up a collection of items. The user enters the number of elements in input and clicks the Create button, after which the collection is rendered. When you click on the Clear button, the collection of items is cleared.

const input = document.querySelector('input');

const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');

const divBoxes = document.querySelector('#boxes');

btnRender.addEventListener('click', createBoxes);

function createBoxes() {
  const inputValue = input.value;
  if (inputValue < 1) {
    return;
  }

  const enlarge = 10;
  for (let i = 0; i <= inputValue - 1; i++) {
    const newBox = document.createElement('div');
    newBox.classList = 'box';

    if (divBoxes.lastElementChild) {
      newBox.style.width =
        divBoxes.lastElementChild.offsetWidth + enlarge + 'px';
        divBoxes.lastElementChild.offsetHeight + enlarge + 'px';

      // have to add something else here
    }

    divBoxes.appendChild(newBox);
  }
}

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes(event) {
  divBoxes.removeChild('box');
}