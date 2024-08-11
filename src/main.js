

// Якщо імейл і пароль користувача збігаються, зберігай дані з форми при сабміті
// у локальне сховище і змінюй кнопку Login на Logout і роби поля введення
// недоступними для змін.
// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити Logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці Logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.
// Якщо введені дані не збігаються з потрібними даними, викликати аlert і

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import icon from "./img/javascript.svg";
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
    if (buttonEl.textContent === 'Logout') {
        buttonEl.textContent = 'Login';
        localStorage.removeItem("userData");
        formEl.reset();
        inputEmail.removeAttribute('readonly');
        inputPassword.removeAttribute('readonly');
        return

    }

    if (inputEmail.value.trim() === "" || inputPassword.value.trim() === "") {
        // alert("Заповніть всі поля");
        iziToast.warning({
            message: "Заповніть всі поля",
            iconUrl: icon,
        });
        return;
    }
    if (inputEmail.value !== USER_DATA.email || inputPassword.value !== USER_DATA.password) {
        // alert("Дані не вірні")
        iziToast.error({

            message: "Дані не вірні",
        });

        return;
    }
    iziToast.success({
        message: "All ok your login!",
    });
    const userLocalStoreg = {
        email: inputEmail.value,
        password: inputPassword.value,
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

// Theme switcher

const switcher = document.querySelector('.switcher-toggle');

if (localStorage.getItem('theme') === 'dark') {
	document.body.classList.add('dark')
	document.body.classList.remove('light')
	switcher.checked = true;
}

const onSwitcherChange = () => {
	if (switcher.checked) {
		document.body.classList.add('dark')
		document.body.classList.remove('light')
		localStorage.setItem('theme', 'dark');
	} else {
		document.body.classList.remove('dark')
		document.body.classList.add('light')
		localStorage.setItem('theme', 'light');
	}
}

switcher.addEventListener('change', onSwitcherChange)