import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const localStorageData = localStorage.getItem('feedback-form-state');

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  const inputMsg = input.value;
  const textareaMsg = textarea.value;

  const data = {
    email: inputMsg,
    message: textareaMsg,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
  console.log(data);
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const data = JSON.parse(localStorageData);
  console.log(data);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

function onInputFill() {
  if (!localStorageData) {
    return;
  }
  const data = JSON.parse(localStorageData);
  console.log(data);
  input.value = data.email;
  textarea.value = data.message;
}
onInputFill();
