(function () {
    makeSearch();
    makeLogin();
    makeRegister();
    makeForgot();
})();


function makeSearch() {
    // Create overlay element
    const overlay = document.createElement("div");
    overlay.classList.add("overlay-modal");

    // Create modal__search
    const modalSearch = document.createElement("div");
    modalSearch.classList.add("modal__search");

    const closeButtonSearch = createButton("/img/close.svg", "close");
    closeButtonSearch.classList.add("close");
    modalSearch.appendChild(closeButtonSearch);

    const modalWrapperSearch = document.createElement("div");
    modalWrapperSearch.classList.add("modal__wrapper");

    const h1Search = document.createElement("h1");
    h1Search.classList.add("logo");

    const imgKino = createImage("/img/kinoarea_logo.svg", "logo");
    const pKinoArea = document.createElement("p");

    const spanKino = document.createElement("span");
    spanKino.classList.add("kino");
    spanKino.textContent = "Kino";

    const spanArea = document.createElement("span");
    spanArea.classList.add("area");
    spanArea.textContent = "area";

    pKinoArea.appendChild(spanKino);
    pKinoArea.appendChild(spanArea);
    h1Search.appendChild(imgKino);
    h1Search.appendChild(pKinoArea);
    modalWrapperSearch.appendChild(h1Search);

    const searchQuery = document.createElement("div");
    searchQuery.classList.add("search__query");

    const formSearch = document.createElement("form");
    formSearch.setAttribute("name", "searchForm");

    const inputSearch = document.createElement("input");
    inputSearch.setAttribute("type", "search");
    inputSearch.setAttribute("name", "searchQuery");
    inputSearch.setAttribute("autocomplete", "off");
    inputSearch.setAttribute("id", "searchQuery");
    inputSearch.setAttribute("placeholder", "What are you looking for...");
    formSearch.appendChild(inputSearch);

    const buttonSearchSettings = createButton(
        "/img/search_settings.svg",
        "search settings"
    );
    buttonSearchSettings.classList.add("searchSettings");
    formSearch.appendChild(buttonSearchSettings);

    const buttonSearch = createButton("/img/search.svg", "search");
    buttonSearch.classList.add("searchButton");
    formSearch.appendChild(buttonSearch);

    searchQuery.appendChild(formSearch);
    modalWrapperSearch.appendChild(searchQuery);

    const searchResults = document.createElement("div");
    searchResults.classList.add("search__results");

    const ulSearchListFilms = document.createElement("ul");
    ulSearchListFilms.classList.add("search__list__films");
    searchResults.appendChild(ulSearchListFilms);

    const ulSearchListActors = document.createElement("ul");
    ulSearchListActors.classList.add("search__list__actors");
    searchResults.appendChild(ulSearchListActors);

    modalWrapperSearch.appendChild(searchResults);
    modalSearch.appendChild(modalWrapperSearch);

    // Append modal__search to body
    document.body.appendChild(overlay);
    document.body.appendChild(modalSearch);

    // Function to create button element
    function createButton(imgSrc, altText) {
        const button = document.createElement("button");
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = altText;
        button.appendChild(img);
        return button;
    }

    // Function to create image element
    function createImage(imgSrc, altText) {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = altText;
        return img;
    }
}

function makeLogin() {
    // Create modal__login
    const modalLogin = document.createElement("div");
    modalLogin.classList.add("modal__login");

    const closeButtonLogin = createButton("/img/close.svg", "close");
    closeButtonLogin.classList.add("close");
    modalLogin.appendChild(closeButtonLogin);

    const modalWrapperLogin = document.createElement("div");
    modalWrapperLogin.classList.add("modal__wrapper");

    const h1Login = document.createElement("h1");
    h1Login.textContent = "Войти";
    modalWrapperLogin.appendChild(h1Login);

    const formLoginForm = document.createElement("form");
    formLoginForm.setAttribute("name", "loginForm");

    const inputLogin = createInput("text", "login", "Логин, почта или телефон");
    formLoginForm.appendChild(inputLogin);

    const inputPassword = createInput("text", "password", "Ваш Пароль");
    formLoginForm.appendChild(inputPassword);

    const buttonLogin = createButton(null, null);
    buttonLogin.classList.add("loginButton");
    buttonLogin.setAttribute("type", "submit");
    buttonLogin.textContent = "Войти";
    formLoginForm.appendChild(buttonLogin);

    const buttonRegister = document.createElement("button");
    buttonRegister.classList.add("registerButton");
    buttonRegister.setAttribute("type", "button");
    buttonRegister.textContent = "Зарегистрироваться";
    formLoginForm.appendChild(buttonRegister);

    const forgotPasswordLink = document.createElement("a");
    forgotPasswordLink.setAttribute("href", "#");
    forgotPasswordLink.classList.add("forgotPassword");
    forgotPasswordLink.textContent = "Восстановить пароль";
    formLoginForm.appendChild(forgotPasswordLink);

    modalWrapperLogin.appendChild(formLoginForm);

    const loginOther = document.createElement("div");
    loginOther.classList.add("login_other");

    const loginViaLinks = [
        { target: "vk", icon: "fab fa-vk" },
        { target: "facebook", icon: "fab fa-facebook" },
        { target: "google", icon: "fab fa-google" },
        { target: "twitter", icon: "fab fa-twitter" },
    ];

    loginViaLinks.forEach((link) => {
        const loginViaLink = document.createElement("a");
        loginViaLink.setAttribute("href", "#");
        loginViaLink.setAttribute("data-target", link.target);
        loginViaLink.classList.add("login_via");

        const spanIcon = document.createElement("span");
        spanIcon.className = link.icon;
        loginViaLink.appendChild(spanIcon);

        loginOther.appendChild(loginViaLink);
    });

    modalWrapperLogin.appendChild(loginOther);
    modalLogin.appendChild(modalWrapperLogin);

    // Append modal__login to body
    document.body.appendChild(modalLogin);

    // Function to create button element
    function createButton(imgSrc, altText) {
        const button = document.createElement("button");
        const img = document.createElement("img");
        if (imgSrc) {
            img.src = imgSrc;
            img.alt = altText;
            button.appendChild(img);
        }
        return button;
    }

    // Function to create input element
    function createInput(type, name, placeholder) {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("name", name);
        input.setAttribute("placeholder", placeholder);
        return input;
    }   
}

function makeRegister() {
    const modalRegister = document.createElement("div");
    modalRegister.classList.add("modal__register");

    const closeButtonRegister = createButton("/img/close.svg", "close");
    closeButtonRegister.classList.add("close");
    modalRegister.appendChild(closeButtonRegister);

    const modalWrapperRegister = document.createElement("div");
    modalWrapperRegister.classList.add("modal__wrapper");

    const h1Register = document.createElement("h1");
    h1Register.textContent = "Зарегистрироваться";
    modalWrapperRegister.appendChild(h1Register);

    const formRegisterForm = document.createElement("form");
    formRegisterForm.setAttribute("name", "registerForm");

    const inputName = createInput("text", "name", "Имя");
    formRegisterForm.appendChild(inputName);

    const inputSurname = createInput("text", "surname", "Фамилия");
    formRegisterForm.appendChild(inputSurname);

    const inputLogin = createInput("text", "login", "Придумайте логин");
    formRegisterForm.appendChild(inputLogin);

    const inputPassword1 = createInput(
        "password",
        "password1",
        "Придумайте пароль"
    );
    formRegisterForm.appendChild(inputPassword1);

    const inputPassword2 = createInput(
        "password",
        "password2",
        "Повторите пароль"
    );
    formRegisterForm.appendChild(inputPassword2);

    const inputEmailOrPhone = createInput(
        "text",
        "emailOrPhone",
        "Номер телефона или e-mail"
    );
    formRegisterForm.appendChild(inputEmailOrPhone);

    const divAgreements = document.createElement("div");
    divAgreements.classList.add("agreements");

    const labelAgreement = createCheckboxLabel(
        "agreement",
        "Соглашаюсь на условия"
    );
    divAgreements.appendChild(labelAgreement);

    const labelPersonalData = createCheckboxLabel(
        "personalData",
        "Я согласен на"
    );
    divAgreements.appendChild(labelPersonalData);

    formRegisterForm.appendChild(divAgreements);

    const buttonRegister = document.createElement("button");
    buttonRegister.classList.add("registerButton");
    buttonRegister.setAttribute("type", "submit");
    buttonRegister.textContent = "Зарегистрироваться";
    formRegisterForm.appendChild(buttonRegister);

    modalWrapperRegister.appendChild(formRegisterForm);
    modalRegister.appendChild(modalWrapperRegister);

    document.body.appendChild(modalRegister);

    function createButton(imgSrc, altText) {
        const button = document.createElement("button");
        const img = document.createElement("img");
        if (imgSrc) {
            img.src = imgSrc;
            img.alt = altText;
            button.appendChild(img);
        }
        return button;
    }

    
    function createInput(type, name, placeholder) {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("name", name);
        input.setAttribute("placeholder", placeholder);
        return input;
    }

    function createCheckboxLabel(name, labelText) {
        const label = document.createElement("label");
        label.setAttribute("for", name);

        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", name);
        input.setAttribute("id", name);

        const spanCheck = document.createElement("span");
        spanCheck.classList.add("check");

        const pText = document.createElement("p");
        pText.innerHTML = `${labelText} <a href="#">политики конфиденциальности</a>`;

        label.appendChild(input);
        label.appendChild(spanCheck);
        label.appendChild(pText);

        return label;
    }
}

function makeForgot() {
    const modalForgotPassword = document.createElement("div");
    modalForgotPassword.classList.add("modal__forgot__password");

    const closeButtonForgotPassword = createButton("/img/close.svg", "close");
    closeButtonForgotPassword.classList.add("close");
    modalForgotPassword.appendChild(closeButtonForgotPassword);

    const modalWrapperForgotPassword = document.createElement("div");
    modalWrapperForgotPassword.classList.add("modal__wrapper");

    const h1ForgotPassword = document.createElement("h1");
    h1ForgotPassword.textContent = "Восстановить пароль";
    modalWrapperForgotPassword.appendChild(h1ForgotPassword);

    const formRecoverPassword = document.createElement("form");
    formRecoverPassword.setAttribute("name", "recoverPassword");

    const inputEmailOrPhone = createInput(
        "text",
        "emailORPhone",
        "Почта или номер телефон"
    );
    formRecoverPassword.appendChild(inputEmailOrPhone);

    const divCheckCode = document.createElement("div");
    divCheckCode.classList.add("checkCode");

    const buttonSendCode = document.createElement("button");
    buttonSendCode.setAttribute("type", "button");
    buttonSendCode.classList.add("sendCode");
    buttonSendCode.textContent = "Отправить";
    divCheckCode.appendChild(buttonSendCode);

    const inputCode = createInput("text", "code", "Полученный код");
    divCheckCode.appendChild(inputCode);

    formRecoverPassword.appendChild(divCheckCode);

    const buttonNext = document.createElement("button");
    buttonNext.setAttribute("type", "submit");
    buttonNext.classList.add("next");
    buttonNext.textContent = "Далее";
    formRecoverPassword.appendChild(buttonNext);

    modalWrapperForgotPassword.appendChild(formRecoverPassword);

    const formNewPassword = document.createElement("form");
    formNewPassword.setAttribute("name", "newPassword");

    const inputNewPassword = createInput(
        "text",
        "newPassword",
        "Придумайте новый пароль"
    );
    formNewPassword.appendChild(inputNewPassword);

    const inputRepeatPassword = createInput(
        "text",
        "repeatPassword",
        "Повторите новый пароль"
    );
    formNewPassword.appendChild(inputRepeatPassword);

    const buttonDone = document.createElement("button");
    buttonDone.setAttribute("type", "submit");
    buttonDone.classList.add("done");
    buttonDone.textContent = "Готово!";
    formNewPassword.appendChild(buttonDone);

    modalWrapperForgotPassword.appendChild(formNewPassword);
    modalForgotPassword.appendChild(modalWrapperForgotPassword);

    document.body.appendChild(modalForgotPassword);

    function createButton(imgSrc, altText) {
        const button = document.createElement("button");
        const img = document.createElement("img");
        if (imgSrc) {
            img.src = imgSrc;
            img.alt = altText;
            button.appendChild(img);
        }
        return button;
    }

    function createInput(type, name, placeholder) {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("name", name);
        input.setAttribute("placeholder", placeholder);
        return input;
    }
}