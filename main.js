import { getData } from "./modules/http";
import { renderHeader } from "./modules/renders";
import { reload } from "./modules/ui";
import { reload_actors } from "./modules/ui";


const ul = document.querySelector("ul");
let genre = document.querySelectorAll("p");
let genres_box_inner = document.querySelector('.genres_box_inner')
let actor_interval = document.querySelectorAll('p')

renderHeader();



getData("/movie/upcoming").then((res) => reload(res?.data?.results, ul));
// getData("/movie/upcoming").then((res) => console.log(res.data));
getData("/genre/movie/list").then((res) => console.log(res.data.results));
getData("/person/popular").then((res) => reload_actors(res?.data?.results));


// getData("/discover/movie?with_genres=" + 12).then((res) => reload_genres(res?.data?.results, genre));

// genre.forEach((element) => {
// 	element.onclick = () => {
// 		genre.forEach((element) => {
// 			element.classList.remove("active_genre");
// 		});
// 		element.classList.add("active_genre");
// 	};
// });


actor_interval.forEach((element) => {
	element.onclick = () => {
		actor_interval.forEach((element) => {
			element.classList.remove("active_genre");
		});
		element.classList.add("active_genre");
	};
});