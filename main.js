import { getData } from "./modules/http";
import {
	renderHeader
} from "./modules/renders";
import { reload, reload_genres,  } from "./modules/ui";

const ul = document.querySelector('ul')
let genre = document.querySelectorAll("p");
let genres_box_inner = document.querySelector(".genres_box_inner")


renderHeader()

getData('/movie/upcoming')
	.then(res => reload(res?.data?.results, ul))

getData('/genre/movie/list')
	.then(res =>  reload_genres(res.data.genres,genres_box_inner))


	

// genre.forEach((element) => {
// 	element.onclick = () => {
// 		genre.forEach((element) => {
// 			element.classList.remove("active_genre");
// 		});
// 		element.classList.add("active_genre");
// 	};
// });