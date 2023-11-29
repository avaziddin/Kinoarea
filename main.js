import { renderHeader } from "./modules/renders";
import axios from "axios"
const ul = document.querySelector('ul')

renderHeader()

const img_ip = import.meta.env.VITE_API
axios.get('https://api.themoviedb.org/3/movie/now_playing?language=ru', {
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
	}
})
	.then(res => reload(res.data.results, ul))
// import axios from "axios"
// const ul = document.querySelector('ul')

// axios.get('https://api.themoviedb.org/3/movie/now_playing?language=ru', {
// 		headers: {
// 			Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
// 		}
// 	})
// 	.then(res => reload(res.data.results, ul))

function reload(arr, place) {
	place.innerHTML = ""

	for (let item of arr) {
		let li = document.createElement('li')
		let img = document.createElement('img')
		let span = document.createElement('span')
		let rating = document.createElement('span')
		let button = document.createElement('button')
		let a = document.createElement('a')

		span.classList.add('p')
		rating.classList.add('rating')
		button.classList.add('button')

		span.innerHTML = item.title
		img.src = img_ip + item.poster_path
		rating.innerHTML = item.vote_average
		a.innerHTML = "Карточка фильма"
		a.href = '/'

		li.append(img, span, rating, button)
		button.append(a)
		place.append(li)


		if (item.vote_average < " 5.0") {
			rating.style.backgroundColor = "#CB3F36"
		}
		li.onmouseenter = () => {
			button.classList.add('btn_flex')
		}
		li.onmouseleave = () => {
			button.classList.remove('btn_flex')
		}
		// button.onclick = () => {
		// 	window.location.href = `https://www.themoviedb.org/movie/${item.id}`
		// }
	}
}

// 		span.innerHTML = item.title
// 		img.src = "https://image.tmdb.org/t/p/original" + item.poster_path

// 		li.append(img, span)
// 		place.append(li)
// 	}
// }

let genre = document.querySelectorAll("p");

genre.forEach((element) => {
  element.onclick = () => {
    genre.forEach((element) => {
		element.classList.remove("active_genre");
    });
	element.classList.add("active_genre");
  };
});
