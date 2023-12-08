import { getData } from "../../modules/http";
import { renderHeader } from "../../modules/renders";
import { reload } from "../../modules/ui";


let store = JSON.parse(localStorage.getItem('lekeds'))
let liked_movies_one = document.querySelector('.liked_movies_one')
renderHeader();


let movies = []
store.forEach(element => {
    getData(`/movie/${+element}`)
        .then(res=> {
            console.log(res.data)
            movies.push(res.data)
        })

});

reload(movies, liked_movies_one)