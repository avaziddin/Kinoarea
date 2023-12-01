import { loadEvents } from "./modules/events";
import { getData } from "./modules/http";
import { reload_genres } from "./modules/ui";
import { renderGenres, renderHeader, renderPopularMovies, renderPopularSelector } from "./modules/renders";
import { reload_actors } from "./modules/ui";

export const ul = document.querySelector('ul')
export const h1 = document.querySelector('.h1')
export let btn = document.querySelector(".btn")
let genre = document.querySelector(".genres_box_inner");
let popularMoviesSelector = document.querySelector(".year__list");
let popularMovies = document.querySelector(".swiper-wrapper");


let actor_interval = document.querySelectorAll('p')

renderHeader();

getData('/genre/movie/list')
	.then(res => reload_genres(res?.data?.genres, genre))



getData("/person/popular").then((res) => reload_actors(res?.data?.results));




loadEvents();



renderGenres(genre);
renderPopularSelector(popularMoviesSelector);
renderPopularMovies(popularMovies)



actor_interval.forEach((element) => {
	element.onclick = () => {
		actor_interval.forEach((element) => {
			element.classList.remove("active_genre");
		});
		element.classList.add("active_genre");
	};
});
