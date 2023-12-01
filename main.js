import { loadEvents } from "./modules/events";
import { getData } from "./modules/http";
import { reload_genres } from "./modules/ui";
import { renderGenres, renderHeader, renderPopularMovies, renderPopularSelector } from "./modules/renders";

export const ul = document.querySelector('ul')
export const h1 = document.querySelector('.h1')
export let btn = document.querySelector(".btn")
let genre = document.querySelector(".genres_box_inner");
let popularMoviesSelector = document.querySelector(".year__list");
let popularMovies = document.querySelector(".swiper-wrapper");

renderHeader()

getData('/genre/movie/list')
	.then(res => reload_genres(res?.data?.genres, genre))



loadEvents();



renderGenres(genres);
renderPopularSelector(popularMoviesSelector);
renderPopularMovies(popularMovies)
