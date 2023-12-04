import { getData } from "../../modules/http"

let h1 = document.querySelector('h1')
let id = location.search.split('=').at(-1)

h1.innerHTML = id