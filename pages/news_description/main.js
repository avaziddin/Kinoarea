import { renderHeader } from "../../modules/renders"
import { footers } from "../../modules/ui"
import { getData } from "../../modules/http"

let vidio = document.querySelector('.vidio')
let btn_a = document.querySelector('a')
let id = location.search.split('=').at(-1)
const img_ip = import.meta.env.VITE_IMAGE_URL
let iframe = document.querySelector('iframe')
const video_url = import.meta.env.VITE_VIDEO_URL
function showTrailer(data) {
    console.log(video_url);
    iframe.src = video_url + data.key
}


getData('/movie/' + id)
    .then(res => {
        console.log(res);
        let h1 = document.createElement('h1')
        let img = document.createElement('img')
        let p = document.createElement('p')



        h1.innerHTML = res.data.original_title
        img.src = img_ip + res.data.backdrop_path
        p.innerHTML = res.data.overview


        h1.classList.add('h1')
        img.classList.add('text_img')
        p.classList.add('text_p')

        getData(`/movie/${res.data.id}/videos`)
            .then(res => {
                let video = res.data.results.find(el => el.type === 'Trailer')
                if (video) {
                    showTrailer(video)
                }
            })

        vidio.before(h1, img, p)

        btn_a.href = "/"

    })

renderHeader()
footers()