import { renderFrames, renderHeader, renderNames, renderSwiperMovies, renderSwiperPosters } from "../../modules/renders";
const id = location.search.split("=")[1];
if (id) {
    console.log(id);
} else {
    location.assign("/");
}
renderHeader();

let postersPlace = document.querySelector(".posters .swiper-wrapper");
let postersPlaceSwiper = document.querySelector(".posters .swiper");
let framesPlace = document.querySelector(".frames .grid");
let samePlace = document.querySelector(".sameMovies .swiper-wrapper");
let samePlaceSwiper = document.querySelector(".sameMovies .swiper");

renderSwiperPosters(postersPlace, postersPlaceSwiper, `/movie/${id}/images?language=ru`);
renderFrames(framesPlace, `/movie/${id}/images`);
renderSwiperMovies(samePlace, samePlaceSwiper, `/movie/${id}/similar?language=ru`);
renderNames(`[data-name]`, `/movie/${id}?language=ru`);