import Chart from 'chart.js/auto';
import { getData } from "../../modules/http";

let id = location.search.split("=").at(-1)
let img = document.querySelector(".bg_film")
let dscr = document.querySelector(".dscr")
let title = document.querySelector("#title")
let big_title = document.querySelector("#big_title")
let uli = document.querySelector(".sec_ul")
let year = document.querySelector("#year")
let tag = document.querySelector("#taggel")
let rejis = document.querySelector("#rejis")
let writer = document.querySelector("#writer")
let cameraman = document.querySelector("#camere_man")
let production = document.querySelector("#production")
let country = document.querySelector("#country")
let genre = document.querySelector("#genre")
let budget = document.querySelector("#budget")
let time = document.querySelector("#time")
let release = document.querySelector("#release")
let orig_l = document.querySelector("#orig_l")
let body = document.querySelector(".film_bg")
let drawwer = document.querySelector("#drawwer")
let montaj = document.querySelector("#montaj")

let save_img = document.querySelector(".save img")
let like = document.querySelector(".save")
let like_el = document.createElement('img')
let likes = JSON.parse(localStorage.getItem("likes")) || []
like_el.src = '../../img/white_like.svg'

if (likes.includes(id)) {
    like_el.src = "../../img/red_heart.svg"
} else {
    like_el.src = "../../img/white_like.svg"

}
like.append(like_el)
like.onclick = () => {
    if (likes.includes(id)) {
        likes = likes.filter(el => el !== id)
        localStorage.setItem("likes", JSON.stringify(likes))
        like_el.src = "../../img/white_like.svg"
        return
    }
    likes.push(id)
    like_el.src = "../../img/red_heart.svg"
    localStorage.setItem("likes", JSON.stringify(likes))



};



const img_ip = import.meta.env.VITE_IMAGE_URL



getData(`/movie/${id}/credits`)
    .then(res => {

        console.log(res);
        production.innerHTML = res.data.cast[0].name
        writer.innerHTML = res.data.crew[3].name
        cameraman.innerHTML = res.data.crew[2].name
        rejis.innerHTML = res.data.crew[10].name
        drawwer.innerHTML = res.data.crew[9].name
        montaj.innerHTML = res.data.crew[16]

    })


getData(`/movie/${id}`)
    .then(res => {
        console.log(res);



        body.style.backgroundImage = `url(${img_ip + res.data.backdrop_path})`
        img.style.backgroundImage = `url(${img_ip + res.data.poster_path})`
        title.innerHTML = res.data.original_title
        big_title.innerHTML = res.data.original_title
        dscr.innerHTML = res.data.overview
        year.innerHTML = res.data.release_date.split("-")[0]
        country.innerHTML = res.data.production_countries[0].name
        tag.innerHTML = res.data.tagline
        genre.innerHTML = res.data.genres[0].name
        budget.innerHTML = res.data.revenue + " $"
        release.innerHTML = res.data.release_date
        time.innerHTML = res.data.runtime + " мин"
        orig_l.innerHTML = res.data.spoken_languages[0].english_name

        const data = {

            datasets: [{
                data: [res.data.vote_average, 10],
                backgroundColor: [
                    'rgb(4,209,14)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',

                ],
                hoverOffset: 4
            }]
        };
        const config = {
            type: 'doughnut',
            data: data,
        }
        const ctx = document.getElementById('myChart');
        new Chart(ctx, config)


    })






