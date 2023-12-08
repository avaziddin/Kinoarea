import { getData } from "../../modules/http";
import { reload } from "../../modules/ui";

// if ((JSON.parse(localStorage.getItem("likes")) || []).includes(id)) return;


// let get = [...(JSON.parse(localStorage.getItem("likes")) || []), id];
// localStorage.setItem("likes", JSON.stringify(get));

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

});
