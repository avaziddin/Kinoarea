import { getNews } from "../../modules/http";
import { renderHeader } from "../../modules/renders";
import { news_reload } from "../../modules/ui";
// import Swiper JS
import swiper, { Swiper } from 'swiper';
// import Swiper styles
import 'swiper/css';
let news_two = document.querySelector('.news_two')
renderHeader();
let swiper_wrapper = document.querySelector('.swiper-wrapper')
console.log(swiper_wrapper);

getNews()
    .then(res => {
        console.log(res.data);
        news_reload(res.data.articles.splice(0, 17), news_two)
    })


