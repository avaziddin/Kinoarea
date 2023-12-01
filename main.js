import { getData } from "./modules/http";
import { renderHeader } from "./modules/renders";
import { reload, reload_genres } from "./modules/ui";

export const ul = document.querySelector('ul')
export const h1 = document.querySelector('.h1')
export let btn = document.querySelector(".btn")
let genre = document.querySelector(".genres_box_inner");

renderHeader()

getData('/genre/movie/list')
	.then(res => reload_genres(res?.data?.genres, genre))
