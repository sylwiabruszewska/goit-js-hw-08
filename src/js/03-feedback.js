import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

// obsługa input - zapisywanie w localStorage, ładowanie zawartości localStorage do pól formularza
const handleInput = throttle(() => {
  saveData();
}, 500);

const saveData = () => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

const loadData = () => {
  const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
};

loadData();

// form.addEventListener('input', handleInput);
emailInput.addEventListener('input', handleInput);
messageInput.addEventListener('input', handleInput);
