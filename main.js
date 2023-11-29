import { getData } from "./modules/http";
import {
	renderHeader
} from "./modules/renders";
import { reload } from "./modules/ui";

const ul = document.querySelector('ul')
let genre = document.querySelectorAll("p");

renderHeader()

getData('/movie/upcoming')
	.then(res => reload(res?.data?.results, ul))

getData('/genre/movie/list')
	.then(res => console.log(res.data))


// genre.forEach((element) => {
// 	element.onclick = () => {
// 		genre.forEach((element) => {
// 			element.classList.remove("active_genre");
// 		});
// 		element.classList.add("active_genre");
// 	};
// });