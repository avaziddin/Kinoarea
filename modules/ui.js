const img_ip = import.meta.env.VITE_IMAGE_URL

export function reload(arr, place) {
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
		
	}
}

