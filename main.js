import { getData } from "./modules/http";
import {
	renderHeader
} from "./modules/renders";
import { reload } from "./modules/ui";

const ul = document.querySelector('ul')
let genre = document.querySelectorAll("p");
let box = document.querySelector(".genres_box_inner")

renderHeader()

getData('/movie/upcoming')
	.then(res => reload(res?.data?.results, ul))

getData('/genre/movie/list')
	.then(res => reload_genres(res.data.genres, box))

function reload_genres(arr, place) {

	arr.forEach(e => {
		let p = document.createElement("p")

		p.innerHTML = e.name

		place.append(p)

		p.onclick = () => {
			let id = e.id
			getData('/discover/movie?with_genres=' + id)
				.then(res => console.log(res))
		}
	});

}
// genre.forEach((element) => {
// 	element.onclick = () => {
// 		genre.forEach((element) => {
// 			element.classList.remove("active_genre");
// 		});
// 		element.classList.add("active_genre");
// 	};
// });