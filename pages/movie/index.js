import { getData } from "../../modules/http";

let boxi = document.querySelector(".boxi")

const img_ip = import.meta.env.VITE_IMAGE_URL

const id = location.search.split("=")[1]
console.log(id);

function reload (arr,place) {
   place.innerHTML = ""
   console.log(arr);
    for(let i of arr) {
    let box = document.createElement("div")
    let img = document.createElement("img")
    let h1 = document.createElement("h1")
    let p = document.createElement("p")
    let span = document.createElement("span")
    
    box.classList.add("box")
    box.style.marginBottom = "100px"
    h1.classList.add("boxh2")
    p.classList.add("boxp")
    span.classList.add("boxspan")
    img.src = img_ip +i.profile_path
    h1.innerHTML = i.character
    p.innerHTML = i.known_for_department
    span.innerHTML = i.name


    place.append(box)
    box.append(img,h1,p,span) 
}
}


getData(`/movie/${id}/credits?language=ru`)
.then(res => reload(res.data.cast,boxi))