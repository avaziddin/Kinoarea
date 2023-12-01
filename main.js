import { getData } from "./modules/http";
import {
	renderHeader
} from "./modules/renders";
import { reload } from "./modules/ui";

const ul = document.querySelector('ul')
let genre = document.querySelectorAll("p");
let box = document.querySelector(".genres_box_inner")
let trailer_min = document.querySelector('.trailer_min')
let iframe = document.querySelector('iframe')
const img_ip = import.meta.env.VITE_IMAGE_URL
const video_url = import.meta.env.VITE_VIDEO_URL

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

function showTrailer(data) {
	console.log(video_url);
	iframe.src = video_url + data.key
}

getData('/discover/movie')
	.then(res => {
		for(let item of res.data.results) {
			let trailer_block = document.createElement('div')
			let img = document.createElement('img')
			let p = document.createElement('p')

			img.src = img_ip + item.backdrop_path
			p.innerHTML = item.title

			trailer_block.classList.add('tr_m')

			trailer_block.append(img, p)
			trailer_min.append(trailer_block)

			trailer_block.onclick = () => {
				getData(`/movie/${item.id}/videos`)
					.then(res => {
						let video = res.data.results.find(el => el.type === 'Trailer')
						if(video) {
							showTrailer(video)
						} else {
							trailer_block.classList.add('no-video')
						}
					})
			}
		}
	})