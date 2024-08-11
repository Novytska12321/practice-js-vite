// Якщо імейл і пароль користувача збігаються, зберігай дані з форми при сабміті
// у локальне сховище і змінюй кнопку Login на Logout і роби поля введення
// недоступними для змін.
// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити Logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці Logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.
// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.
const USER_DATA = {
  email: "user@mail.com",
  password: "secret",
};
const formEl = document.querySelector(".login-form");
const buttonEl = document.querySelector(".login-btn");
const inputEmail = document.querySelector("[name='email']");
const inputPassword = document.querySelector("[name='password']");
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    if (inputEmail.value.trim() === "" || inputPassword.value.trim() === "") {
        alert("Заповніть всі поля");
        return;
    }
    if (inputEmail.value !== USER_DATA.email || inputPassword.value !== USER_DATA.password) {
        alert("Дані не вірні")
        return;
    }
    const userLocalStoreg = {
        email: inputEmail.value,
        password:inputPassword.value,
}
    localStorage.setItem('userData', JSON.stringify(userLocalStoreg));
    buttonEl.textContent = 'Logout';
    inputEmail.setAttribute('readonly', true);
    inputPassword.setAttribute('readonly', true);
})

const userDataLS = localStorage.getItem('userData');
if (userDataLS) {
    const userDataParsed = JSON.parse(userDataLS);
    inputEmail.value = userDataParsed.email;
    inputPassword.value = userDataParsed.password;
    buttonEl.textContent = 'Logout';
    inputEmail.setAttribute('readonly', true);
    inputPassword.setAttribute('readonly', true);
}