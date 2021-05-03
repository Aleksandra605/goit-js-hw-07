const input = document.querySelector('input#name-input');
console.log(input);

let span = document.querySelector('span#name-output');

input.addEventListener('input', onChangeInput);

function onChangeInput(event) {
    console.log(event.currentTarget.value)
    if (event.currentTarget.value === '') {
        span.textContent = 'незнакомец'
        return;
    };
    
     span.textContent = event.currentTarget.value;
}


