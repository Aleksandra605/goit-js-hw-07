const control = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

control.addEventListener('input', currentValue);

function currentValue(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}
