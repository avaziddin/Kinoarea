import axios from "axios"
const ul = document.querySelector('ul')

axios.get('https://api.themoviedb.org/3/movie/now_playing?language=ru', {
		headers: {
			Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
		}
	})
	.then(res => reload(res.data.results, ul))


function reload(arr, place) {
	place.innerHTML = ""

	for (let item of arr) {
		let li = document.createElement('li')
		let img = document.createElement('img')
		let span = document.createElement('span')


		span.innerHTML = item.title
		img.src = "https://image.tmdb.org/t/p/original" + item.poster_path

		li.append(img, span)
		place.append(li)
	}
}