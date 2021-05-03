const input = document.querySelector('input');

const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');

const divBoxes = document.querySelector('#boxes');


btnRender.addEventListener('click', createBoxes);

function createBoxes(event) {
    console.log(event.currentTarget.value)
    
    const newBox = divBoxes.innerHTML = '<div class="box"></div>';
    return newBox * event.currentTarget.value;
 
}

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes(event) {
    divBoxes.removeChild('box');
}