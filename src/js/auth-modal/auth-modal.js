import { openModal, closeModal } from '../modal-window/index.js';
import { requestUserRegistration, requestUserLogin, requestUserInfo } from '../helpers/index.js';
openModalAuth()
export function openModalAuth() {
    const markup = `
        <h2 class="modal-window__item_auth__title">Ви можете авторизуватися за допомогою Google Account:</h2>
        <button class="modal-window__item_auth__google-auth js-google-auth">
            <svg class="js-google-auth" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M17.8554 7.33402C17.9354 7.33402 18.0002 7.39888 18.0002 7.47889V9C18.0002 9.56932 17.9474 10.126 17.8459 10.666C17.0614 14.8604 13.3661 18.0303 8.93678 17.9998C3.96677 17.9655 -0.010737 13.9498 0.000266918 8.97972C0.0112005 4.01857 4.03652 0 9.00023 0C11.4321 0 13.6386 0.964758 15.2585 2.53188C15.317 2.58845 15.3186 2.68168 15.261 2.7392L13.109 4.89115C13.0536 4.94656 12.9641 4.948 12.9074 4.89396C11.8906 3.92614 10.5149 3.33197 9.00023 3.33197C5.87235 3.33197 3.35358 5.83284 3.33234 8.96066C3.311 12.109 5.85688 14.668 9.00023 14.668C11.5506 14.668 13.7078 12.9832 14.4191 10.666H9.14511C9.0651 10.666 9.00023 10.6011 9.00023 10.5211V7.47886C9.00023 7.39884 9.0651 7.33398 9.14511 7.33398H17.8554V7.33402Z" fill="#2196F3"/>
                <path d="M17.855 7.33398H16.7685C16.8485 7.33398 16.9134 7.39885 16.9134 7.47886V8.99997C16.9134 9.56929 16.8605 10.126 16.7591 10.666C16.0106 14.6675 12.6129 17.7365 8.45605 17.9837C8.6151 17.9931 8.7752 17.9986 8.93643 17.9997C13.3658 18.0303 17.061 14.8604 17.8456 10.666C17.947 10.126 17.9999 9.56929 17.9999 8.99997V7.47883C17.9999 7.39885 17.935 7.33398 17.855 7.33398Z" fill="#1E88E5"/>
                <path d="M3.85174 6.62632L1.11841 4.65138C2.65185 1.87787 5.60681 0 9.00002 0C11.4319 0 13.6384 0.964758 15.2583 2.53188C15.3168 2.58845 15.3183 2.68168 15.2608 2.7392L13.1088 4.89115C13.0535 4.94645 12.964 4.94817 12.9074 4.89424C11.8906 3.92625 10.5149 3.332 9.00002 3.332C6.71725 3.332 4.74956 4.68144 3.85174 6.62632Z" fill="#F44336"/>
                <path d="M3.06274 6.05622L3.85183 6.62635C4.67132 4.85117 6.3823 3.57268 8.41047 3.36297C8.42573 3.36132 8.44039 3.35931 8.45592 3.35784C8.27744 3.34089 8.09656 3.33203 7.9136 3.33203C5.85144 3.33203 4.05426 4.41917 3.06274 6.05622Z" fill="#E53935"/>
                <path d="M14.1717 2.53188C14.2302 2.58845 14.2317 2.68168 14.1741 2.73923L12.4275 4.4859C12.5948 4.61317 12.755 4.74929 12.907 4.894C12.9638 4.94803 13.0533 4.94659 13.1087 4.89118L15.2607 2.73923C15.3182 2.68168 15.3167 2.58848 15.2582 2.53188C13.6382 0.964758 11.4317 0 8.99988 0C8.81739 0 8.63633 0.00608203 8.45654 0.0168047C10.6728 0.148816 12.6732 1.08232 14.1717 2.53188Z" fill="#E53935"/>
                <path d="M15.602 15.1165C13.9585 16.8901 11.6087 18.0001 8.99997 18.0001C5.4764 18.0001 2.42582 15.9753 0.948486 13.0253L3.73901 11.113C4.5764 13.1966 6.61652 14.6681 8.99997 14.6681C10.4957 14.6681 11.8561 14.0887 12.8687 13.1419L15.602 15.1165Z" fill="#4CAF50"/>
                <path d="M3.73913 11.113L2.91626 11.6769C3.87198 13.4574 5.7514 14.6681 7.91355 14.6681C8.09639 14.6681 8.27713 14.6591 8.45555 14.6422C6.30929 14.4376 4.51193 13.036 3.73913 11.113Z" fill="#43A047"/>
                <path d="M9.00015 18.0001C11.6089 18.0001 13.9587 16.89 15.6022 15.1165L14.9327 14.6328C13.3895 16.5534 11.0745 17.8275 8.45825 17.9837C8.63755 17.9944 8.81818 18.0001 9.00015 18.0001Z" fill="#43A047"/>
                <path d="M3.332 8.99998C3.332 9.74677 3.4765 10.4599 3.73908 11.1129L0.948516 13.0252C0.341543 11.8141 0 10.4469 0 8.99998C0 7.42273 0.405633 5.94034 1.11839 4.65137L3.85172 6.6263C3.51816 7.3481 3.332 8.15251 3.332 8.99998Z" fill="#FFC107"/>
                <path d="M2.9161 11.6768L3.73897 11.1129C3.47639 10.4599 3.33189 9.74676 3.33189 8.99997C3.33189 8.15249 3.51805 7.34808 3.85161 6.62628L3.06253 6.05615C2.55012 6.90219 2.25274 7.89497 2.2455 8.96066C2.23882 9.94342 2.48234 10.8688 2.9161 11.6768Z" fill="#FFB300"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="18" height="18" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <span class="js-google-auth">Google</span>
        </button>
        <p class="modal-window__item_auth__text">Або зайти за допомогою імейлу і пароля, попередньо зареєструвавшись:</p>
        <input type="email" class="modal-window__item_auth__input" name="email" placeholder="E-mail"/>
        <p class="modal-window__error-email"></p>
        <input type="password" class="modal-window__item_auth__input" name="password" placeholder="Password" />
        <p class="modal-window__error-password"></p>
        <div class="modal-window__item_auth__panel">
            <button class="modal-window__item_auth__button modal-window__item_auth__button_login">Увійти</button>
            <button class="modal-window__item_auth__button">Зареєструватись</button>
        </div>
    `;

    openModal(markup);

    const refs = {
        modalTitle: document.querySelector('.modal-window__item_auth__title')
    };
    refs.wrapper = refs.modalTitle.parentNode;
    refs.inpEmail = refs.wrapper.querySelector('.modal-window__item_auth__input[name="email"]');
    refs.inpPassword = refs.wrapper.querySelector('.modal-window__item_auth__input[name="password"]');
    refs.spanEmail = refs.wrapper.querySelector('.modal-window__error-email');
    refs.spanPassword = refs.wrapper.querySelector('.modal-window__error-password');


    refs.wrapper.classList.add('modal-window__item_auth');

    refs.wrapper.addEventListener('click', e => {
        if (e.target.classList.contains('modal-window__item_auth__button_login')) {
            // email login
            if (validateInputs()) {
                const email = refs.inpEmail.value,
                    password = refs.inpPassword.value;
                // sent to server
                requestUserLogin({ email, password })
                    .then(response => {
                        console.log(response);
                        if (response.message === 'Password is wrong') {
                            notValid(refs.inpPassword, refs.spanPassword, 'Введіть правильний пароль.');
                            refs.inpPassword.focus();
                        } else if (!response.accessToken) {
                            notValid(refs.inpPassword, refs.spanPassword, response.message);
                        } else {
                            // Redirect to account
                            closeModal();
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        alert('Вибачте, сервер не працює, але ми вже лагодимо його.');
                        closeModal();
                    });
            }
        } else if (e.target.classList.contains('js-google-auth')) {
            // google login
            if (validateInputs()) {
                const email = refs.inpEmail.value,
                    password = refs.inpPassword.value;
                // sent to server
                requestUserInfo({ email, password })
                    .then(response => {
                        console.log(response);
                        if (response.message === 'Unauthorized') {
                            alert('Вибачте, але Ви не зареєстровані в системі Google. Спробуйте скористатись кнопкою "Увійти".');
                        } else {
                            // Redirect to account
                            closeModal();
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        alert('Вибачте, сервер не працює, але ми вже лагодимо його.');
                        closeModal();
                    });
            }
        } else if (e.target.classList.contains('modal-window__item_auth__button')) {
            // email registration
            if (validateInputs()) {
                const email = refs.inpEmail.value,
                    password = refs.inpPassword.value;
                // sent to server
                requestUserRegistration({ email, password })
                    .then(response => {
                        console.log(response);
                        // Redirect to account
                        closeModal();
                    })
                    .catch(error => {
                        console.log(error);
                        alert('Вибачте, сервер не працює, але ми вже лагодимо його.');
                        closeModal();
                    });
            }
        }
    });

    function validateInputs() {
        let result = true;
        if (validate(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, refs.inpEmail.value)) {
            valid(refs.inpEmail, refs.spanEmail, '');
        } else {
            notValid(refs.inpEmail, refs.spanEmail, 'Не валідний email');
            result = false;
            refs.inpEmail.focus();
        }
        if (validate(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g, refs.inpPassword.value)) {
            valid(refs.inpPassword, refs.spanPassword, '');
        } else {
            notValid(refs.inpPassword, refs.spanPassword, 'Пароль має містити від 6 символів з великими, маленькими латинськими буквами і цифрами.');
            if (result) refs.inpPassword.focus();
            result = false;
        }
        return result;
    }

    function validate(regex, inp) {
        return regex.test(inp);
    }

    function notValid(inp, el, mess) {
        inp.classList.add('is-invalid');
        el.innerHTML = mess;
    }

    function valid(inp, el, mess) {
        inp.classList.remove('is-invalid');
        inp.classList.add('is-valid');
        el.innerHTML = mess;
    }
}