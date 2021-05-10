const input = document.querySelector('#validation-input');


input.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    if (event.currentTarget.value.length == input.dataset.length) {
        input.classList.remove('invalid');
        return input.classList.add('valid');
    }
    else if (event.currentTarget.value == '') {
      input.classList.remove('valid');
      return     input.classList.remove('invalid');
    }
        input.classList.remove('valid');
        return input.classList.add('invalid');
    
}
