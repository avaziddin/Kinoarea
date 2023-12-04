// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

import { getData } from "./http";

import kinoareaLogo from "/img/kinoarea_logo.svg";
import searchIcon from "/img/search.svg";
import { genresList } from "./helpers";

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

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
        };
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

// export async function renderGenres(place) {
//     place.innerHTML = "";

//     let genres = await getData("/genre/movie/list");
//     for (const genre of genres.data.genres) {
//         let li = document.createElement("p");
//         li.innerHTML = `${genre.name.capitalize()}`;
//         li.classList.add("genre");
//         li.dataset.id = genre.id;

//         place.append(li);

//         if (genres.data.genres.indexOf(genre) == 0) {
//             li.classList.add("active_genre");
//         }

//         li.onclick = async () => {
//             if (li.classList.contains("active_genre")) {
//                 li.classList.remove("active_genre");
//             } else {
//                 li.classList.add("active_genre");
//             }
//             let ids = [];
//             let actives = document.querySelectorAll(".active_genre");
//             actives.forEach((element) => {
//                 ids.push(element.dataset.id);
//             });

//             let newResponse = await getData(
//                 `/discover/movie?with_genres=${ids.join(",")}`
//             );

//             reload(newResponse.data.results, ul);
//         };
//     }
// }

export async function renderPopularSelector(place) {
    place.innerHTML = "";

    let allTime = document.createElement("li");
    allTime.classList.add("year", "active");
    allTime.innerHTML = "Все время";

    allTime.onclick = () => {
        let actives = place.querySelectorAll(".active");
        actives.forEach((element) => {
            element.classList.remove("active");
        });
        allTime.classList.add("active");
    };

    place.append(allTime);

    let years = new Date();

    for (let i = 0; i < 24; i++) {
        let li = document.createElement("li");
        li.classList.add("year");
        li.innerHTML = `${years.getFullYear() - i}`;
        place.append(li);

        li.onclick = () => {
            let actives = place.querySelectorAll(".active");
            actives.forEach((element) => {
                element.classList.remove("active");
            });
            li.classList.add("active");
        };
    }
}

/**
 * Renders popular movies in a specified place using a swiper.
 *
 * @param {HTMLElement} place - The element where the movies will be rendered.
 * @param {HTMLElement} swiperPlace - The element where the swiper will be initialized.
 * @return {Promise<void>} Returns a promise that resolves when the movies are rendered.
 */
export async function renderSwiperMovies(place, swiperPlace, searchPlace) {
    place.innerHTML = "";

    let data = [];

    for (let i = 0; i < 3; i++) {
        let response = await getData(`${searchPlace}?page=${i + 1}`);
        data.push(...response.data.results);
    }

    let genres = [];
    let response = await getData("/genre/movie/list");
    for (const genre of response.data.genres) {
        genres.push(genre);
    }

    for (const movie of data) {
        let li = document.createElement("div");
        let overlay = document.createElement("div");
        let button = document.createElement("button");

        let img_wrapper = document.createElement("div");
        let img = document.createElement("img");
        let rating = document.createElement("span");

        let info = document.createElement("div");
        let title = document.createElement("h3");
        let genre = document.createElement("p");

        let genresToPaste = await genresList(movie.genre_ids, genres);

        li.classList.add("swiper-slide");
        overlay.classList.add("overlay");
        button.classList.add("movie-button");
        button.innerHTML = "Карточка фильма";

        img_wrapper.classList.add("movie-img");
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        img.alt = movie.title;
        rating.classList.add("rating");
        rating.innerHTML = movie.vote_average;

        info.classList.add("info");
        title.classList.add("title");
        title.innerHTML = movie.title;
        genre.classList.add("genres");
        genre.innerHTML = genresToPaste.join(", ");

        place.append(li);
        li.append(img_wrapper, info);
        img_wrapper.append(img, rating, overlay, button);
        info.append(title, genre);

        button.onclick = () => {
            alert(`Карточка фильма (Soon...) ${movie.title}`);
        };

        img_wrapper.onmouseenter = () => {
            overlay.classList.remove("unhover", "hover");
            button.classList.remove("unhover", "hover");

            overlay.classList.add("hover");
            button.classList.add("hover");
        };

        img_wrapper.onmouseleave = () => {
            overlay.classList.add("unhover");
            button.classList.add("unhover");

            setTimeout(() => {
                overlay.classList.remove("hover", "unhover");
                button.classList.remove("hover", "unhover");
            }, 400);
        };
    }

    let swiper = new Swiper(swiperPlace, {
        slidesPerView: 4,
        slidesPerGroup: 4,
        direction: "horizontal",

        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            480: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
        },

        spaceBetween: 22.4,

        modules: [Navigation, Pagination],

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "fraction",
        },
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },
    });
}

export async function renderSwiperPosters(place, swiperPlace, searchPlace) {
    place.innerHTML = "";

    for (let i = 0; i < 6; i++) {
        let imgPath = "/img/movie/image.png"
        let slider = document.createElement("div");
        let img = document.createElement("img");

        slider.classList.add("swiper-slide");
        img.classList.add("swiper-lazy");

        img.src = imgPath;
        img.alt = "Poster";

        place.append(slider);
        slider.append(img)
    }

    let swiper = new Swiper(swiperPlace, {
        slidesPerView: 4,
        slidesPerGroup: 1,
        direction: "horizontal",

        spaceBetween: 22.4,
    })
}