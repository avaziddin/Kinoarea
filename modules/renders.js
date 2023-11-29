import kinoareaLogo from "/img/kinoarea_logo.svg";
import searchIcon from "/img/search.svg";
/**
 * Renders the header of the webpage.
 *
 * @param {none} - This function does not accept any parameters.
 * @return {none} - This function does not return any value.
 */
export function renderHeader() {
    let place = document.body;

    let header = document.createElement("header");

    let wrap = document.createElement("div");
    let leftSide = document.createElement("div");
    let midSide = document.createElement("div");
    let rightSide = document.createElement("div");

    header.classList.add("header");
    wrap.classList.add("wrap");

    leftSide.classList.add("header-left");
    midSide.classList.add("header-mid");
    rightSide.classList.add("header-right");

    place.prepend(header);
    header.append(wrap);
    renderHeaderLogo(leftSide);
    renderHeaderMenu(midSide);
    renderHeaderSearch(rightSide);
    wrap.append(leftSide, midSide, rightSide);
}

/**
 * Renders the header logo and appends it to the specified place.
 *
 * @param {HTMLElement} place - The place where the header logo will be appended.
 * @return {type} This function does not return any value.
 */
function renderHeaderLogo(place) {
    let logoWrapper = document.createElement("div");
    let logo = document.createElement("div");
    let logoImg = document.createElement("img");
    let logoTitle = document.createElement("span");

    let logoSocials = document.createElement("div");
    let logoVk = document.createElement("a");
    let logoVkImg = document.createElement("span");
    let logoInst = document.createElement("a");
    let logoInstImg = document.createElement("span");
    let logoFb = document.createElement("a");
    let logoFbImg = document.createElement("span");
    let logoTwitter = document.createElement("a");
    let logoTwitterImg = document.createElement("span");

    logoWrapper.classList.add("logo-wrapper");
    logo.classList.add("logo");

    logoImg.classList.add("logo-img");
    logoImg.src = kinoareaLogo;
    logoImg.alt = "Kinoarea logo";

    logoTitle.classList.add("logo-title");
    logoTitle.innerHTML = `<span class='logo-kino'>Kino</span><span class='logo-area'>area</span>`;

    logoSocials.classList.add("logo-socials");

    logoVk.classList.add("logo-vk");
    logoVkImg.classList.add("logo-vk-img");

    logoInst.classList.add("logo-inst");
    logoInstImg.classList.add("logo-inst-img");

    logoFb.classList.add("logo-fb");
    logoFbImg.classList.add("logo-fb-img");

    logoTwitter.classList.add("logo-twitter");
    logoTwitterImg.classList.add("logo-twitter-img");

    place.append(logoWrapper);
    logoWrapper.append(logo, logoSocials);
    logo.append(logoImg, logoTitle);
    logoSocials.append(logoVk, logoInst, logoFb, logoTwitter);
}

function renderHeaderMenu(place) {
    let menu = document.createElement("nav");
    let menuList = document.createElement("ul");
    const menuItems = [
        "Афиша",
        "Медиа",
        "Фильмы",
        "Актёры",
        "Новости",
        "Подборки",
        "Категории",
    ];
    for (const item of menuItems) {
        let menuItem = document.createElement("li");
        menuItem.innerHTML = item;
        menuList.append(menuItem);

        menuItem.onclick = () => {
            console.log(item);
        };
    }
    menu.classList.add("menu");
    menuList.classList.add("menu-list");

    place.append(menu);
    menu.append(menuList);
}

function renderHeaderSearch(place) {
    let searchButton = document.createElement("a");

    let loginButton = document.createElement("a");

    searchButton.classList.add("search-button");
    searchButton.innerHTML = "<img src='" + searchIcon + "' alt='search icon'>";

    loginButton.classList.add("login-button");
    loginButton.innerHTML = "Войти";

    place.append(searchButton, loginButton);

    searchButton.onclick = () => {
        let search = document.querySelector(".modal__search");
        let overlay = document.querySelector(".overlay");
        let closeButton = search.querySelector(".close");
        let searchForm = search.querySelector("form");

        searchForm.onsubmit = (e) => {
            e.preventDefault();

            search.classList.remove("show");
            overlay.classList.remove("overlay-open");

            alert("Поиск (Soon...)");
        }
        search.classList.add("show");
        overlay.classList.add("overlay-open");

        overlay.onclick = () => {
            search.classList.remove("show");
            overlay.classList.remove("overlay-open");
        };

        closeButton.onclick = () => {
            search.classList.remove("show");
            overlay.classList.remove("overlay-open");
        };
    };

    loginButton.onclick = () => {
        let login = document.querySelector(".modal__login");
        let overlay = document.querySelector(".overlay");
        let closeButton = login.querySelector(".close");

        let loginForm = login.querySelector("form");
        let registerButton = login.querySelector(".registerButton");
        let forgotPassword = login.querySelector(".forgotPassword");

        loginForm.onsubmit = (e) => {
            e.preventDefault();
            login.classList.remove("show");
            overlay.classList.remove("overlay-open");
            alert("Вошли (Soon...)");
        };

        registerButton.onclick = () => {
            login.classList.remove("show");

            let register = document.querySelector(".modal__register");
            let overlay = document.querySelector(".overlay");
            let closeButton = register.querySelector(".close");
            let registerForm = register.querySelector("form");
            

            registerForm.onsubmit = (e) => {
                e.preventDefault();
                register.classList.remove("show");
                overlay.classList.remove("overlay-open");
                alert("Регистрировались (Soon...)");
            };

            closeButton.onclick = () => {
                register.classList.remove("show");
                overlay.classList.remove("overlay-open");
            };

            overlay.onclick = () => {
                register.classList.remove("show");
                overlay.classList.remove("overlay-open");
            };

            register.classList.add("show");
        };

        forgotPassword.onclick = (e) => {
            e.preventDefault();
            login.classList.remove("show");

            let forgot = document.querySelector(".modal__forgot__password");
            let overlay = document.querySelector(".overlay");
            let closeButton = forgot.querySelector(".close");
            let forgotFormRecover = forgot.querySelector(
                "[name='recoverPassword']"
            );
            let forgotFormNew = forgot.querySelector("[name='newPassword']");

            forgot.classList.add("show");
            forgotFormRecover.classList.add("show");

            closeButton.onclick = () => {
                forgot.classList.remove("show");
                overlay.classList.remove("overlay-open");
            };

            forgotFormRecover.onsubmit = (e) => {
                e.preventDefault();
                forgotFormRecover.classList.remove("show");
                forgotFormNew.classList.add("show");
            };

            forgotFormNew.onsubmit = (e) => {
                e.preventDefault();
                forgot.classList.remove("show");
                forgotFormNew.classList.remove("show");
                overlay.classList.remove("overlay-open");
                alert("Пароль изменен (Soon...)");
            };
        };

        login.classList.add("show");
        overlay.classList.add("overlay-open");

        overlay.onclick = () => {
            login.classList.remove("show");
            overlay.classList.remove("overlay-open");
        };

        closeButton.onclick = () => {
            login.classList.remove("show");
            overlay.classList.remove("overlay-open");
        };
    };
}
