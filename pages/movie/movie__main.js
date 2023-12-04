import { renderHeader, renderSwiperMovies, renderSwiperPosters } from "../../modules/renders";
renderHeader();

let postersPlace = document.querySelector(".posters .swiper-wrapper");
let postersPlaceSwiper = document.querySelector(".posters .swiper");
let sequelsPlace = document.querySelector(".sequels .swiper-wrapper");
let sequelsPlaceSwiper = document.querySelector(".sequels .swiper");
let samePlace = document.querySelector(".sameMovies .swiper-wrapper");
let samePlaceSwiper = document.querySelector(".sameMovies .swiper");
renderSwiperPosters(postersPlace, postersPlaceSwiper, "");
renderSwiperMovies(sequelsPlace, sequelsPlaceSwiper, "/movie/top_rated");
renderSwiperMovies(samePlace, samePlaceSwiper, "/movie/top_rated");