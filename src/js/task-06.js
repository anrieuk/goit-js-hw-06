const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputLength = Number(event.target.dataset.length);
  const inputValue = event.target.value;
  
  if (inputValue.length === inputLength) {
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
  } else {
    event.target.classList.remove('valid');
    event.target.classList.add('invalid');
  }
}
