import { getData } from "../../modules/http";
import { reload } from "../../modules/ui";

let get = JSON.parse(localStorage.getItem('likes'))
let container_like = document.querySelector('.liked')
console.log(get);

let movies_like = []

get.forEach(el => {
    getData(`/movie/${el}`)
        .then(res => {
            movies_like.push(res.data)
            reload(movies_like, container_like)
        })

})
