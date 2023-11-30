import { loadEvents } from "./modules/events";
import { getData } from "./modules/http";
import { renderGenres, renderHeader, renderPopularMovies, renderPopularSelector } from "./modules/renders";
import { reload } from "./modules/ui";

export const ul = document.querySelector("ul");
let genres = document.querySelector(".genres_box_inner");
let popularMoviesSelector = document.querySelector(".year__list");
let popularMovies = document.querySelector(".swiper-wrapper");
renderHeader();
loadEvents();
getData("/movie/upcoming").then((res) => reload(res?.data?.results, ul));


renderGenres(genres);
renderPopularSelector(popularMoviesSelector);
renderPopularMovies(popularMovies)