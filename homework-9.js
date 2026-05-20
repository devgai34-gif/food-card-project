// 4. Логика формы подписки в футере
const subscriptionForm = document.querySelector('.input-button');

if (subscriptionForm) {
  subscriptionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = subscriptionForm.querySelector('.subscribe-input');
    const emailValue = emailInput.value;

    console.log('Новая подписка');
    console.log({ email: emailValue });

    subscriptionForm.reset();
    alert(`Письмо будет отправлено на: ${emailValue}`);
  });
}

// 5. Логика модального окна
let registeredUser = null;

const overlay = document.querySelector('.overlay');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.querySelector('.close');
const registrationForm = document.getElementById('registrationForm');

// Функция открытия
if (openModalBtn && overlay) {
  openModalBtn.addEventListener('click', () => {
    overlay.classList.add('modal-showed');
  });
}

// Функция закрытия (по крестику)
if (closeModalBtn && overlay) {
  closeModalBtn.addEventListener('click', () => {
    overlay.classList.remove('modal-showed');
  });
}

// Закрытие при клике на оверлей (проверка overlay)
if (overlay) {
  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
      overlay.classList.remove('modal-showed');
    }
  });
}

// 6. Работа формы регистрации
if (registrationForm) {
  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!registrationForm.checkValidity()) {
      alert('заполните все поля корректно.');
      return;
    }

    const formData = new FormData(registrationForm);
    const data = Object.fromEntries(formData.entries());

    // Проверка совпадения паролей
    if (data.password !== data.confirmPassword) {
      alert('Ошибка: Пароли не совпадают!');
      // Очищаем только поле подтверждения для удобства
      const confirmInput = registrationForm.querySelector('#confirmPassword');
      if (confirmInput) confirmInput.value = '';
      return;
    }

    delete data.confirmPassword;

    registeredUser = {
      ...data,
      id: Date.now(),
      createdOn: new Date().toLocaleString('ru-RU')
    };

    console.log('Регистрация завершена успешно! ✅');
    console.log('Данные пользователя:', registeredUser);

    if (overlay) overlay.classList.remove('modal-showed');
    registrationForm.reset();

    alert(`Добро пожаловать, ${data.firstName}!`);
  });
}

