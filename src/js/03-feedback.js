import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const data = {
  email: '',
  message: '',
};
localStorage.setItem('feedback-form-state', JSON.stringify(data));

console.log(123);
// form.addEventListener('input');
