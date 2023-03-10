import throttle from 'lodash.throttle';

//зробити оболонку-згрупувати
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

//ключ для сховища
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

populatedMessage();

//додати прослуховувач
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

//Зупиняємо поведінку за замовчуванням   e.preventDefault();
//Прибираємо повідомлення із сховища  localStorage.removeItem(STORAGE_KEY)
//очищаємо форму refs.form.reset();
// +++ порожні поля Не відправляти, а виводити alert()
function onFormSubmit(e) {
  e.preventDefault();
   
    if (refs.email.value === '') {
      return alert('Заповніть, будь ласка, необхідні поля');
    } else if (refs.message.value === '') {
      return alert("Ваш коментар може змінити світ");
    } else {
      e.target.reset(); 
      localStorage.removeItem(STORAGE_KEY); 
      console.log(formData);
    }
}

//Отримуємо значення поля
//Зберігаємо його в сховищі
//додати Throttle
function onTextareaInput() {
  formData[refs.email.name] = refs.email.value;
  formData[refs.message.name] = refs.message.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  
}


//Отримуємо значення зі сховища при перезавантаженні, втраті зв'язку
//Якщо там щось було, оновлюємо DOM
function populatedMessage() {
  const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedFormData) {
    refs.message.value = savedFormData.message;
    refs.email.value = savedFormData.email;
  }
}


